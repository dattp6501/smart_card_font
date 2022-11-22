SmartCardApp.controller('ProfileCtrl', ['$scope','$rootScope','$location','$cookies','ProfileService',
function($scope,$rootScope,$location,$cookies,ProfileService){
    (function initController(){
        $rootScope.sh_header = true;
        var session = $cookies.get("session");
        if(session==undefined || session==null || session==""){
            toastr.error("Chưa đăng nhập");
            $location.path("/login");
        }

        fnGetProfile();
    })();

    function fnGetProfile(){
        $("#md_load").modal("show");
        var reqData = {};
        reqData.session = $cookies.get("session");
        ProfileService.GetProfile(reqData,function(respData){
            $("#md_load").modal("hide");
            if(respData.code == 200){
                $scope.user = respData.result;
            }else if(respData.code == 700){
                $cookies.remove("session");
                $cookies.remove("user_name");
                $location.path("/login");
            }
        });
    }
}]);