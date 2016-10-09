(function(){
    function ErrorMessage(){
        return {
            restrict : 'A',
            // link : function($scope, $element, $attrs){
            //     console.info('called');
            //     $element.addClass("error");
            //     $element.addClass("error--"+$attrs.type);
            // }
            compile: function($element, $attrs){
                console.log('Inside compile function');
                console.log($element);
                console.log($attrs);
                console.log('Compile function end');
                $element.addClass("error");

                // return {
                //     pre : function(){
                //         console.log('Inside pre');
                //     },
                //     post : function(){
                //         console.log('Inside post');
                //     }
                // }
                return function postLink($scope, $element,$attrs){
                    console.log('Inside post link function');
                    console.log($element);
                    $element.addClass('error--'+$attrs.type);
                }
            }
        }
    }
    angular
        .module('app')
        .directive('errorMessage', ErrorMessage);


}());