(function(){
    function HTMLEditor(){

        return {
            require:'ngModel',
            link: function($scope, $element, $attrs, $ctrl){
                var ngModelCtrl = $ctrl;
                //NGModel is used for two way binding.
                //Here we do View -> Model
                $element.on('input', function (event){

                 ngModelCtrl.$setViewValue(event.target.innerHTML);
                });

                //Inside render method we do model to view again

                ngModelCtrl.$render = function(){
                    $element.html(ngModelCtrl.$modelValue);
                }
                ngModelCtrl.$setViewValue($element[0].innerHTML);
            }
        }


    }

    angular.module('app').directive('htmlEditor', HTMLEditor);
}());