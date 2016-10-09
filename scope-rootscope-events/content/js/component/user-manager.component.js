(function(){

    var userManager = {
        bindings:{},
        controller: function($rootScope,$scope){
            this.user = {
                name: '',
                email:''
            };
            this.loginUser = function(){
                $scope.$emit('login', this.user);
            }
            var unbind = $rootScope.$on('logout', function(event, data){
                console.log(data);
            });
            $scope.$on('logout', function(event, data){
                console.log(data);
            });
            $scope.$on('$destroy', unbind);
        },
        template:`
        <form ng-submit="$ctrl.loginUser();" class="child">
            <div>
                Name : <input type="text" ng-model="$ctrl.user.name">
            </div>
            <div>
                Email : <input type="text" ng-model="$ctrl.user.email">
            </div>
            <button type="submit">
                Log In
            </button>
        </form>
    `
    }

    angular.module('app')
        .component('userManager', userManager);
})();