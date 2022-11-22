SmartCardApp.controller('ProfileCtrl', ['$scope','$rootScope','$location','$cookies','ProfileService',
function($scope,$rootScope,$location,$cookies,ProfileService){
    (function initController(){
        $rootScope.sh_header = true;
        var session = $cookies.get("session");
        if(session==undefined || session==null || session==""){
            toastr.error("Chưa đăng nhập");
            $location.path("/login");
        }
    })();

    $scope.user = {
        "full_name": "Trương Phúc Đạt",
        "email": "dattp@gmail.com",
        "phone": "",
        "address": "Thái BÌnh"
    };
}]);