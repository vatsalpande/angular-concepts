(function(){

    function CheckoutController(){

        this.details = {
            username: 'Vatsal',
            password: '',
            coupon:'summer-50'
        };


        this.submit = function(){

        }
    }

    angular
        .module('app')
        .controller('CheckoutController', CheckoutController);
}());