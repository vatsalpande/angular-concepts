(function(){

    function gender(){
        return function(collection, gender){
            if(!gender){
                return collection;
            };

            var filteredSet = collection.filter(function(item){
               return item.gender === gender;
            });
            return filteredSet;

        }
    }

    angular.module('app')
        .filter('gender', gender);
}());