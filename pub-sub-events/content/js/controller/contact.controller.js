(function(){

    function ContactController($scope){
        var ctrl = this;
        ctrl.logoutUser = function(){
            $scope.$broadcast('logout', ctrl.contacts);
        }

        $scope.$on('login', function(event, data){
           console.log(event);
            console.log(data);
            ctrl.contacts.push(data);
        });
        ctrl.contacts = [];
    }

    angular
        .module('app')
        .controller('ContactController', ContactController);

})();