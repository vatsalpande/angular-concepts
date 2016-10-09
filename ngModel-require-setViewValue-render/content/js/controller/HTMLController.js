(function(){
    function HTMLController(){
        //this.content = "Some";
        this.reset = function(){
            this.content = "";
        }
    }

    angular
        .module('app')
        .controller('HtmlController', HTMLController);
}());