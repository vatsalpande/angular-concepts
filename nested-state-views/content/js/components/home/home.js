(function(){


    angular.module('home',['ui.router'])
        .config(
            function($stateProvider, $urlRouterProvider){
                $stateProvider.state('home',{
                    url:'/',
                    component: 'home',
            });
            $urlRouterProvider.otherwise("/");
        });

}());