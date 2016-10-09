(function(){

    function ordinal(){
        return function(value){
            var suffix = '';
            var last = value%10;
            var specialLast = value%100;
            console.log(last);
            if(!value || value <1){
                return value;
            }
            if(last === 1 && specialLast !== 11){
                suffix = 'st'; //11st not allowed
            }else if (last === 2 && specialLast !== 12){
                suffix = 'nd'; //12nd not allowed
            }else if (last ===3 && specialLast !== 13){
                suffix = 'rd'; //13rd not allowed
            }else{
                suffix = 'th';
            }
            return value+suffix;

        }
    }

    angular.module('app')
        .filter('ordinal', ordinal)
}());