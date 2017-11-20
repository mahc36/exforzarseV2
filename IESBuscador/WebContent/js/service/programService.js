app.factory("programService", function($q, $http) {
	return {
		filter : function(){
			return $http.get('http://localhost:8080/IESBuscador/rest/services/filter').then(function(data){
				var receiveddata = angular.fromJson(data);			
				return receiveddata;
			}).catch(function(data){
				console.log(data);
			});
		},
		
		addProgram : function(program){
			return $http.put('http://localhost:8080/IESBuscador/rest/services/addProgram/',program).then(function(data){
				var receiveddata = angular.fromJson(data);			
				return receiveddata;
			}).catch(function(data){
				console.log(data);
			});
		},
		listCampus : function(){
			return $http.get('http://localhost:8080/IESBuscador/rest/campusService/listAllCampus/').then(function(data){
				var receiveddata = angular.fromJson(data);			
				return receiveddata;
			}).catch(function(data){
				console.log(data);
			});
		}
	}
});
	