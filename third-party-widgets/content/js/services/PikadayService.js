(function() {
function PikadayService(){
    return function (options) {
        return new Pikaday(options);
    }
}
    angular.module('app')
        .factory('PikdayService', PikadayService);
})();