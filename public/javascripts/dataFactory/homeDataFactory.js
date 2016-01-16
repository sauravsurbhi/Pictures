angular.module('ngApp').factory('homeFactory', function ($http) {

	

		function getHomeData (){
			return $http.get('javascripts/data/data.json');
		}

		return {
			getHomeData : getHomeData
		}
});