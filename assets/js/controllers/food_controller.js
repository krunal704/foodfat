angular.module("food", [])
	.controller("food_controller", function ($scope, $http) {
		var foods={};

		//ajax request to append data form route admin/food/data
		$http.get('../admin/food/getfood').then(function (res) {
			$scope.foods = res.data;
		});


		
		function updateFood(id, name){
			
			$http.post('../admin/food/update', {fname:name, _id:id}).then(function (res) {
				console.log(name + " is requested for update");
			//	$scope.foods = res.data;
			});
		}

		


		//confirm delete function for deleteing food item
		function confirmFoodDelete(id, name){
			var C = confirm(name+" do you want to delete?");
			if(C){
				$http.get('../admin/food/delete/'+id).then(function (res) {
					console.log(name +" is "+res.data);	
					$http.get('../admin/food/getfood').then(function (res) {
						$scope.foods = res.data;
					})
					
				});
			}
			else{
				console.log("deleting Canceled");
			}

				C = null;
		}

		function addform(){
			$http.get('../admin/food/add');
		}
		$scope.addform = addform;
		$scope.foods = foods;
		$scope.confirmFoodDelete = confirmFoodDelete;
		$scope.updateFood = updateFood;
		
});
	