angular.module("restaurant", [])
	.controller("restaurant_controller", function ($scope) {
		var restaurants = [
	{ 
		"name":"Au Bon Pain", 
		"address":"238 Main St., Cambridge, MA 02142",
		"city":"Cambridge"
	}, 
	{ 
		"name":"Chipotle Mexican Grill", 
		"address":"2 Cambridge Ctr, Cambridge, MA 02412 ",
		"city":"Florida"
	}, 
	{ 
		"name":"Starbucks", 
		"address":"6 Cambridge Ctr, Cambridge, MA 02142 6 Cambridge Ctr, Cambridge, MA 02142 6 Cambridge Ctr, Cambridge, MA 02142",
		"city":"Cambridge"
	},
	{ 
		"name":"Legal Sea Foods", 
		"address":"5 Cambridge Ctr, Cambridge, MA 02142",
		"city":"Mumbai"
	}
];

		$scope.restaurants = restaurants;


	
		$scope.confirmRestDelete = function(strin){
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
	