angular.module("restaurant", [])
	.config(function($locationProvider){
		$locationProvider.html5Mode(
		{
			enabled: true,
  			requireBase: false
		});
	})//add then successfully get url
	.controller("restaurant_controller", function ($scope, $http, $location) {
		var restaurants = {};

		$scope.name = " ";
		$scope.address = " ";
		$scope.lat = " ";
		$scope.long = " ";
		$scope.phone = " ";
		$scope.email = " ";
		$scope.owner_email = " ";
		$scope.website = " ";
		$scope.otime = " ";
		$scope.ctime = " ";
		$scope.city = " ";
		$scope.itemid1 = " ";
		$scope.pricei1 = " ";
		$scope.itemid2 = " ";
		$scope.pricei2 = " ";
		$scope.itemid3 = " ";
		$scope.pricei3 = " ";
		$scope.zipcode = " ";


		$http.get('../admin/rest/getrest').then(function (res) {
			$scope.restaurants = res.data;
		});


		function getRest() {
			var id = $location.search();
			console.log(id.id);
			$http.get('../admin/rest/update/'+id.id).then(function (res) {

		$scope.name = res.data.rest_name;
		$scope.address = res.data.rest_address;
		$scope.lat = res.data.rest_loc_lat;
		$scope.long = res.data.rest_loc_long;
		$scope.phone = res.data.phoneno;
		$scope.email = res.data.rest_email;
		//opening_status : req.body.open,
		$scope.owner_email = res.data.owner_mail_id;
		$scope.website = res.data.restraunt_website;
		$scope.otime = res.data.rest_open_time;
		$scope.ctime = res.data.rest_close_time;
		$scope.city = res.data.rest_city;
		$scope.itemid1 = res.data.rest_menu.food_id_1;
		$scope.pricei1 = res.data.rest_menu.food_price_1;
		$scope.itemid2 = res.data.rest_menu.food_id_2;
		$scope.pricei2 = res.data.rest_menu.food_price_2;
		$scope.itemid3 = res.data.rest_menu.food_id_3;
		$scope.pricei3 = res.data.rest_menu.food_price_3;
		$scope.zipcode = res.data.zipcode	;


		});
		}
		/*$scope.time =  {
		  "time": {
		    "from": 1005,
		    "to": 1020,
		    "dFrom": 0,
		    "dTo": 1440,
		    "step": 15,
		    "minRange": 15,
		    "hours24": false
		  },
		  "hasDatePickers": false,
		  "hasTimeSliders": true
		};

*/
		function updateRest(id, name){

			console.log("before form called");

			console.log(name + " is requested for update");
			window.location.replace('../views/update_rest.html?id='+id);

			//	$scope.foods = res.data;

		}
		function addForm() {
			window.location.replace('../views/manage_restaurant.html');
		}


		 function confirmRestDelete(id, name) {
			var C = confirm(name +" do you want to delete?");
			if(C){
				console.log("deleted succefully");
				$http.get('../admin/rest/delete/'+id).then(function (res) {
					console.log(name +" is "+res.data);

				});
				$http.get('../admin/rest/getrest').then(function (res) {
						$scope.restaurants = res.data;
					});
			}
			else{
				console.log("deleting Canceled");
			}
				C = null;
		}
		$scope.searchFood = function(sfood) {
		//	console.log("searching "+food);
			if (sfood.trim()!="" || sfood != null) {
			$http.get('../admin/food/search/'+sfood).then(function (res) {
				$scope.foods = res.data;
			});
		}
		else{
			$scope.foods = {};
		}
		}

		$scope.confirmRestDelete = confirmRestDelete;
		$scope.restaurants = restaurants;
		$scope.getRest = getRest;
		$scope.addForm = addForm;
		$scope.updateRest= updateRest;


});
