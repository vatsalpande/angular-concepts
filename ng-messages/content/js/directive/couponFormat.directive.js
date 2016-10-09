(function(){

    function CouponFormat(){
        return {
            require : 'ngModel',
            link: function($scope, $element, $attr, $ctrl){
                var ngModelCtrl = $ctrl;
                console.info(ngModelCtrl);
                ngModelCtrl.$formatters.push(function(value){
                    //coupon:'summer-50' ->'SUMMER_50'
                    return value.replace(/-/g,'_').toUpperCase();
                });
                ngModelCtrl.$parsers.push(function(value){
                    //coupon:'SUMMER_50' ->'summer-50'
                    return value.replace(/_/g, '-').toLowerCase();
                });
                ngModelCtrl.$validators.coupon = function(modelValue, viewValue){
                    var COUPON_REGEX = /[A-Z]+\_\d{2}/;
                    return COUPON_REGEX.test(viewValue);
                };
                // ngModelCtrl.$formatters.unshift(function(value){
                //     //coupon:'summer-50' ->'SUMMER_50'
                //     return value.replace(/-/g,'_').toUpperCase();
                // });
                // ngModelCtrl.$parsers.unshift(function(value){
                //     //coupon:'SUMMER_50' ->'summer-50'
                //     return value.replace(/_/g, '-').toLowerCase();
                // })
                },
            template: ``
        }
    }

    angular.module('app').directive('couponFormat', CouponFormat);
}());