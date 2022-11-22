SmartCardApp.controller('DashboardCtrl', ['$scope','$rootScope','$location','$cookies','DashboardService',
function($scope,$rootScope,$location,$cookies,DashboardService){
    (function initController(){
        $rootScope.sh_header = true;
        var session = $cookies.get("session");
        if(session==undefined || session==null || session==""){
            toastr.error("Chưa đăng nhập");
            $location.path("/login");
        }
    })();
}]);