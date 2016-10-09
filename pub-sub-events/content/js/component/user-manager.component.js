(function(){

    var userManager = {
        bindings:{},
        controller: function($scope){
            this.user = {
                name: '',
                email:''
            };
            this.loginUser = function(){
                $scope.$emit('login', this.user);
            }
            $scope.$on('logout', function(event, data){
                console.log(data);
            })
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