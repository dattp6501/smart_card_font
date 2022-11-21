SmartCardApp.controller('LoginCtrl', ['$scope','$rootScope','$location','$cookies','LoginService',
function($scope,$rootScope,$location,$cookies,LoginService) {
    (function initController() {
        $scope.userName = "user1";
        $scope.passWord = "123456789";
    })();

    $scope.Login = fnLogin;
    function fnLogin(){
        var reqData = {};
        reqData.username = $scope.userName;
        reqData.password = $scope.passWord;
        LoginService.Login(reqData,function (respData){
            if(respData.code == 200){
                toastr.error(respData.description);
            }else {
                toastr.error(respData.description);
            }
        });
    }
}]);