angular.module("feedback", [])
	.controller("feedback_controller", function ($scope, $http) {

		var feedbacks;
			$http.get('admin/feedback/getfeedback').then(function (res) {
			console.log(res);
			$scope.feedbacks = res.data;
		});

		/*var feedbacks = [{
			"FirstName":"Mahesh",
			"LastName":"Shah",
			"Feedback":"Thanks to Flipkart who deliver it me with in 5 days Good Phone With Metal Body And Best front Camera With Flash Best for night Selfie",
			"DateTime":"2012-10-15T21:26:17Z"
		},
		{
			"FirstName":"Shailes",
			"LastName":"Mukherji",
			"Feedback":"And Best front Camera With Flash Best for night Selfie Thanks to Flipkart who deliver it me with in 5 days Good Phone With Metal Body " ,
			"DateTime":"2015-08-01T19:26:15Z"
		},
		{
			"FirstName":"Fenil",
			"LastName":"Shah",
			"Feedback":"deliver it me with in 5 days Good Phone With Thanks to Flipkart who deliver it me with in 5 days Good Phone With Metal Body And Best front Camera With Flash Best for night Selfie",
			"DateTime":"2013-10-15T21:26:12Z"
		}
		];*/

		function confirmDelete(strin){
		var C = confirm(strin +"Do You want to delete");
		if(C){
			console.log("deleted succefully");
		}
		else{
			console.log("deleting Canceled");
		}
		C = null;
	};
		$scope.feedbacks = feedbacks;
		$scope.confirmDelete = confirmDelete;

	});
