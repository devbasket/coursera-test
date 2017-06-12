(function () {
'use strict';

angular.module('LunchApp',[])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope){
$scope.items = "";
$scope.message = "";
$scope.checkLunch = function (){
	var inputValue = $scope.items;
	if (inputValue === ""){
		$scope.message = "Please enter data first";
	}else{
		var inputArray = inputValue.split(",");
		if (inputArray.length > 3){
			$scope.message = "Too Much !";
		}else{
			$scope.message = "Enjoy !";
		}
	}
};

}

})();