(function(){

    var statefulComponent = {
        bindings: {
        },
        template:`
            <div></div>
            <pre>{{$ctrl.user | json}}</pre>
            <stateless-component
              user="$ctrl.user"
              test="$ctrl.test"
              on-update = "$ctrl.updateUser($event)">
              </stateless-component>
        `,
        controller : function(){
            this.test = "test";
            this.user = {
                name: 'Vatsal Pande',
                location: 'WA, USA'
            };
            this.updateUser = function(event){
                this.user = event.user;
            }
        }
    }
    angular.module('app')
        .component('statefulComponent', statefulComponent);
})();