(function(){

    var contactPhone = {
        template: `
               <div>Contact via Phone</div>
            `
    }

    angular.module('contact')
        .component('contactPhone', contactPhone)
        .config(function($stateProvider) {
            $stateProvider.state('contact.phone', {
                url: '/phone',
                component: 'contactPhone'
            });
        });
}());