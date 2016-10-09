(function(){
    function tab(){
        return {
            scope:{},
            transclude : true,
            template:`
                <div>
                    <div ng-if="tab.selected">
                        <div ng-transclude></div>
                    </div>
                </div>
                `,
            require:'?^^tabs',
            //With ? if tab is not defined $ctrl will be null.
            //if ? is not present then $ctrl will be undefined
            //Single ^ - Searchs for local and then searches for parent controller
            //Double ^^ - Will search directly on parent controller
            link: function($scope, $elements, $attrs, $ctrl/*-->Inherited Controller*/){
                $scope.tab = {
                    label : $attrs.label,
                    selected:false
                };

                $ctrl.addTab($scope.tab);
            }
        }
    }

    angular
        .module('app')
        .directive('tab', tab);

})();