angular.module("restaurant", ['rgkevin.datetimeRangePicker'])
	.config(function($locationProvider){
		$locationProvider.html5Mode(
		{
			enabled: true,
  			requireBase: false
		});
	})//add then successfully get url
	//add button directives
	.directive("addbuttonsbutton", function(){
		return {
				restrict: "E",
				template: '<button addbuttons class="mdl-button-float mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"><i class="material-icons">add</i></button>'
			}
	})

//Directive for adding buttons on click that show an alert on click
	.directive("addbuttons", function($compile){

			return function(scope, element, attrs){
				element.bind("click", function(){
					scope.count++;
					angular.element(document.getElementById('space-for-buttons')).append(
						$compile(
								'<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">'+
                '<input id="item1" class="mdl-textfield__input" type="text" name="itemid'+scope.count+'" ng-model="item['+scope.count+']" ng-change="searchFood(item['+scope.count+'], '+scope.count+')">'+
                '<label class="mdl-textfield__label" for="item'+scope.count+'">Item Id '+scope.count+'</label>'+
                '<ul class="results'+scope.count+'" ng-style="res['+scope.count+']">'+
                '<li class="mdl-layout" ng-repeat="food in foods['+scope.count+']" style="cursor:pointer;" ng-click="selectFood(food._id, food.item_name,'+scope.count+')" >{{food.item_name}}</li>'+
				'</ul></div>'+
				'<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">'+
                '<input class="mdl-textfield__input" type="number" step="0.01" name="pricei'+scope.count+'" ng-model="price['+scope.count+']">'+
                '<label class="mdl-textfield__label" for="sample3">Price '+scope.count+'</label>'+
                '</div>')(scope));
				});
			};
	})
	.directive("myDatetimeRange", function () {
		return {
					"time": {
		    "from": 480,
		    "to": 1155,
		    "dFrom": 0,
		    "dTo": 1440,
		    "step": 15,
		    "minRange": 15,
		    "hours24": false
		  },
		  "hasDatePickers": false,
		  "hasTimeSliders": true
		};
	})

	.controller("restaurant_controller", function ($scope, $http, $location) {

		var restaurants = {};

		$scope.count = 1;
		$scope.res = [];
		$scope.res[1] = {
			"display":"none"
		};

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
		$scope.zipcode = res.data.zipcode;
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
			if(C)
			{
				console.log("deleted succefully");
				$http.get('../admin/rest/delete/'+id).then(function (res) {
					console.log(name +" is "+res.data);
				});

				$http.get('../admin/rest/getrest').then(function (res) {
						$scope.restaurants = res.data;
				});
			}
			else
			{
				console.log("deleting Canceled");
			}
				C = null;
		}

		$scope.searchFood = function(sfood, i) {
		//	console.log("searching "+food);

			console.log("food is :"+sfood+" with trim "+sfood.trim());
			if (sfood.trim()=="" || sfood == null) {
				$scope.res[i] = {
					"display":"none"
				};
			}
			else
			{
				$scope.res[i] = { "display" : "block" };
				$http.get('../admin/food/search/'+sfood).then(function (res) {
					$scope.foods[i] = res.data;
				});
			}
		}

		$scope.selectFood = function (id, name, i){
			$scope.res[i] = {
				"display":"none"
			};
			$scope.item[i] = name;
		//	$scope.menu.push({"food_id":id,"food_price":name});
			console.log(i+" select food id "+id+" name is "+$scope.item[i]);
		}

		$scope.addElement = function(id, price,i){
			$scope.menu[i] = {"food_id":id,"food_price":price};
		}

		//$scope.menu = [{"id":"1","p":"200"},{"id":"2","p":"300"}];
			$scope.lat = 23.0225;
			$scope.long = 72.5714;
		  $scope.locationpickerOptions = {
                location: {
                    latitude: $scope.lat,
                       longitude: $scope.long
        	       },
            	inputBinding: {
          //          latitudeInput: $('#lat'),
        //            longitudeInput: $('#long'),
              //      radiusInput: $('#us3-radius'),
      //              locationNameInput: $('#address')
                },
                radius: 0,
                enableAutocomplete: true
        }

		$scope.foods = [];
		$scope.confirmRestDelete = confirmRestDelete;
		$scope.restaurants = restaurants;
		$scope.getRest = getRest;
		$scope.addForm = addForm;
		$scope.updateRest= updateRest;


});
