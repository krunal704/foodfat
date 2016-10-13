angular.module("food", [])
	.controller("food_controller", function ($scope) {
		var foods;

		//ajax request to append data form route admin/food/data
		$http.get('admin/food/data').then(function (res) {
			$scope.foods = res.data;
		})

		$scope.foods = foods;


		//confirm delete function for deleteing food item
		$scope.confirmFoodDelete = function(strin){
			var C = confirm(strin+" do you want to delete?");
			if(C){
				console.log("deleted succefully");
			}
			else{
				console.log("deleting Canceled");
			}
				C = null;
		}
		
});
	