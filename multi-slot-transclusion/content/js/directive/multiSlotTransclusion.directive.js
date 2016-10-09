(function() {
    function contactCard(){
        return {
            transclude:{
                name:"h1",
                desc:"?description",
                address:"?address"
            },
            template:`
                <div>
                    <span ng-transclude="name"></span>
                    <div ng-transclude="desc">No description</div>
                    <div ng-transclude="address">No Address</div>
                </div>
                `,

        }
    }

    angular.module('app')
        .directive('contactCard', contactCard);
})();