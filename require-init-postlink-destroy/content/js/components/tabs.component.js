(function(){
     var tabs = {
            transclude:true,
            template: `
            <div class="tabs">
                <ul class="tabs__list">
                    <li ng-repeat="tab in $ctrl.list">
                        <a href="" 
                        ng-bind="tab.label"
                        ng-click="$ctrl.selectTab($index);">
                        </a>
                    </li>
                </ul>
                <div class="tabs__content" ng-transclude ></div>
            </div>
            `,
           controller: function(){
              var ctrl = this;
               ctrl.list = [];
               ctrl.addTab = function(tab){
                   ctrl.list.push(tab);
               }
               ctrl.selectTab = function(index){
                    ctrl.list.forEach(function(tab){
                        tab.selected = false;
                    });
                   ctrl.list[index].selected = true;
               }
               ctrl.$postLink = function(){
                   this.selectTab(0);
               }
               ctrl.$onDestroy = function(){

               }
           },
        }
    angular
        .module('app')
        .component('tabs', tabs);

})();