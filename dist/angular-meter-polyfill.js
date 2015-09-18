!function(angular){"use strict";angular.module("angular-meter-polyfill",[])}(angular),function(angular){"use strict";var isMeterSupported="value"in document.createElement("meter");isMeterSupported||angular.module("angular-meter-polyfill").directive("meter",function(){return{restrict:"E",replace:!1,template:'<div class="meter-inner-element"><div class="meter-bar"><div ng-class="\'meter-\'+status+\'-value\'" ng-style="barStyle"></div></div></div>',scope:{min:"=",max:"=",low:"=",high:"=",value:"="},controller:function($scope){$scope.barStyle={width:0},$scope.$watch(["min","max","low","high","value"],function(){$scope.status="optimum",void 0===$scope.max&&($scope.max=1),$scope.min=$scope.min||0,void 0!==$scope.high&&$scope.value>$scope.high&&($scope.status="suboptimum"),void 0!==$scope.low&&$scope.value<$scope.low&&($scope.status="suboptimum"),$scope.low>$scope.max/2&&void 0!==$scope.low&&$scope.value>$scope.low&&$scope.value>$scope.high&&($scope.status="even-less-good");var barWidth=100*($scope.value-$scope.min)/($scope.max-$scope.min);$scope.barStyle.width=barWidth+"%"})}}})}(angular);