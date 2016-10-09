(function() {
    function contactCard(){
        return {
            transclude:true,
            template:`
                <div>
                    <span>Contact</span>
                    <div></div>
                </div>
                `,
            link : function link($scope, $element, $attrs, $ctrl, $transclude){
                var div = $element.find('div');
                var span = $element.find('span');
                var cloned = $transclude(function($element){
                    $element[1].textContent = $element[1].textContent.toUpperCase();
                });
                span.append(cloned[1]);
                div.append(cloned[3]);
                console.log(cloned);


            }
        }
    }

    angular.module('app')
        .directive('contactCard', contactCard);
})();