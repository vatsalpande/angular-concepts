(function(){
    var contact  = {
        template:`<div class="contact">Contact</div>
                    <div class="tabs">
                    <a href = "#/contact/phone">Phone</a>
                    <a href = "#/contact/email">Email</a>
                    <div ui-view></div>
                    </div>
                    `
    };

    angular.module('contact')
        .component('contact', contact)
        .config(function($stateProvider){
            $stateProvider.state('contact',{
                url:'/contact',
                component: 'contact',
            })
        });
}());