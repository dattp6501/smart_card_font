SmartCardApp.factory('LoginService',['$http','$rootScope',function($http,$rootScope){
    var hostname = $rootScope.hostname;
    var service = {};
    service.Login = fnLogin;
    // service.Logout = fnLogout
    function fnLogin(reqData, callback) {
        var req = {
            method: 'POST',
            url: hostname+'/member/login',
            data: reqData
        }
        $http(req).then(function(respData){callback(respData.data);}, function(respData){});
    }

    // function fnLogout(reqData, callback) {
    //     var req = {
    //         method: 'POST',
    //         url: hostname+'/logout/customer',
    //         data: reqData
    //     }
    //     $http(req).then(function(respData){callback(respData.data);}, function(respData){});
    // }
    
    return service;
}]);