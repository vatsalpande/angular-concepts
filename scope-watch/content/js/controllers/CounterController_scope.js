function CounterController($scope){

    $scope.count = 0;
    $scope.countList = [];
    $scope.increment = function(){
        $scope.count++;
        $scope.countList.unshift($scope.count);
    }

    $scope.decrement = function(){
        $scope.count--;
        $scope.countList.shift($scope.count);
    }

    $scope.$watch('count', function(newValue, oldValue){
        console.log(newValue, oldValue);
    })

}

CounterController.$inject = ['$scope'];

angular
    .module('app')
    .controller('CounterController', CounterController);