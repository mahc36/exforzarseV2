app.factory("campusService", function($q, $http) {
	return {
		listCampus : function(){
			return $http.get('http://localhost:8080/IESBuscador/rest/campusService/listAllCampus/').then(function(data){
				var receiveddata = angular.fromJson(data);			
				return receiveddata;
			}).catch(function(data){
				console.log(data);
			});
		},
		addCampus : function(campus){
			return $http.put('http://localhost:8080/IESBuscador/rest/campusService/addCampus/',campus).then(function(data){
				var receiveddata = angular.fromJson(data);			
				return receiveddata;
			}).catch(function(data){
				console.log(data);
			});
		},
	}
});