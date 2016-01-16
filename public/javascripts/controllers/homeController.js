angular.module('ngApp').controller('homeController', function  ($scope , homeFactory) {
		$scope.home;
		homeFactory.getHomeData().success(function (data){
			$scope.home =data;
		}).error(function (error){
			console.log(error);
		});
	})