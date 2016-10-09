(function(){
    var statelessComponent = {
        bindings : {
            user:'<',
            test:'<',
            onUpdate:'&'
        },
        template : `
            <div>
                <input type="text" ng-model="$ctrl.test">
                <input type="text" ng-model="$ctrl.user.name">
                <input type="text" ng-model="$ctrl.user.location">
                <a href = "" ng-click="$ctrl.updateUser();">Update</a>
            </div>
        `,
        controller: function(){

            this.$onInit = function(event){
             alert('Inside onInit');
                console.info(event);
            }

            this.$onChanges = function(changes){
                alert('Inside $onChanges');
                console.log('Inside onchanges');
                console.log(changes);
                console.log('-----------------');
                if(changes.user){
                    this.user  = angular.copy(this.user);
                }
            }
            this.updateUser = function(){
                alert('Inside updateUser');
                this.onUpdate({
                    $event:{
                        user:this.user,
                        test:'vatsal'

                    }
                })
            }
        }
    }

    angular.module('app').component('statelessComponent', statelessComponent);
})();