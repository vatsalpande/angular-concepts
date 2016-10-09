(function(){

    function DatePicker($timeout, PikdayService){

        return {
            scope:{
                date:"=",
            },
            template:
                `<div>
                    Isolate Date:{{ date | date: 'MMM d, yyyy' }}
                    <input type="text">
                </div>`,
            link : function($scope, $element, $attrs){
                var field = $element[0].querySelector('input');
                var picker = PikdayService({
                    field: field,
                    onSelect: function (date) {
                        $timeout(function(){
                            $scope.date = date;
                        });
                    }
                });
                picker.setDate($scope.date);

            }


        }
    }

angular.module('app')
    .directive('datePicker', DatePicker);
})();