/**
 * DeepWatch - tracks the changes in the inside elements. Use $watch and third argument as true.
 * ShallowWatch - use $watchCollection
 * @param $scope
 * @constructor
 */
function CounterController($scope){
    this.count = 0;
    this.countList = [];
    this.increment = function(){
        this.count++;
        this.countList.unshift({id:this.count});
    }

    this.decrement = function(){
        this.count--;
        this.countList.shift({id:this.count});
    }

    //Cannot use string lookup since we are using controllerAs syntax and count is not a string available on scope
    //Used bind since we cannot use count property directly as this inside the function is pointing to $scope on which the function is called.
    //Implicit binding - Kyle Simpson :)
    //By using bind we are binding this to use current lexical scope's this rather than $scope's this. We could have also used lexical style formula
    //Doing vm = this in the start


    // $scope.$watch(function(){
    //     return this.count
    // }.bind(this), function(newValue, oldValue){
    //     console.log('Inside bind watch');
    //     console.log(initialValue, newValue);
    // })

    //We can do the same thing using angular.bind

    // $scope.$watch(angular.bind(this,
    //     function(){
    //         return this.count;
    //     }),function(newValue, oldValue){
    //         if(newValue == oldValue){
    //             return;
    //         }
    //     console.log(newValue, oldValue);
    // });

    // $scope.$watch(angular.bind(this,
    //     function(){
    //         return this.countList;
    //     }),function(newValue, oldValue){
    //     if(newValue == oldValue){
    //         return;
    //     }
    //     console.log(newValue, oldValue);
    // },true);

    $scope.$watchCollection(angular.bind(this, function(){
        return this.countList;
    }), function(newValue, oldValue){
        if(newValue === oldValue){
            return;
        }
        console.log(newValue, oldValue);

    })



    // var vm = this;
    //
    // $scope.$watch(function(){
    //    return vm.count;
    // }, function(newValue, oldValue){
    //     console.log(initialValue, newValue);
    // });

}

CounterController.$inject = ['$scope'];
angular
    .module('app')
    .controller('CounterController', CounterController);