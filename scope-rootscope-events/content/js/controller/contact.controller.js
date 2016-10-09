(function(){

    function ContactController($rootScope, $scope){
        var ctrl = this;
        ctrl.logoutUser = function(){
            //$rootScope.$broadcast('logout', ctrl.contacts); -> For both scope and rootscope
            //Emit will only notify siblings. ie- only rootscope listeners not the scope llisteners

            $rootScope.$emit('logout', ctrl.contacts);
        }

        $scope.$on('login', function(event, data){
            ctrl.contacts.push(data);
        });
        ctrl.contacts = [];
    }

    angular
        .module('app')
        .controller('ContactController', ContactController);

})();