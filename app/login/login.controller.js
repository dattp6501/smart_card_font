SmartCardApp.controller('LoginCtrl', ['$scope','$rootScope','$location','$cookies','LoginService',
function($scope,$rootScope,$location,$cookies,LoginService) {
    (function initController() {
        $rootScope.sh_header = false;
    })();

    $scope.Login = fnLogin;
    function fnLogin(){
        var reqData = {};
        reqData.user_name = $scope.userName;
        reqData.pass_word = $scope.passWord;
        LoginService.Login(reqData,function (respData){
            if(respData.code == 200){
                $cookies.put("session");
                $location.path("/dashboard");
            }else {
                toastr.error(respData.description);
            }
        });
    }
}]);