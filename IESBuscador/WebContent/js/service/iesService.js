app.factory("iesService", function($q, $http) {
	return {
		getList : function(){
			return $http.get('http://localhost:8080/IESBuscador/rest/iesServices/getIES').then(function(data){
				var received = angular.fromJson(data);			
				return received;
			}).catch(function(data){
				console.log(data);
			});
		},
		findIES: function(nameSearch){				
			return $http.get('http://localhost:8080/IESBuscador/rest/iesServices/findIES/'+nameSearch).then(function(data){
				var received=angular.fromJson(data);
				return received;
			}).catch(function(data){
				console.log(data);
			});
		},
		getInfo:function(iesid){
			return $http.get('http://localhost:8080/IESBuscador/rest/iesServices/getInfo/'+iesid).then(function(data){
				var received=angular.fromJson(data);
				return received;
			}).catch(function(data){
				console.log(data);
			});
		},
		//falta esta parte
		addUniversity:function(ies){
			return $http.put('http://localhost:8080/IESBuscador/rest/iesServices/addUniversity/',ies).then(function(data){
				var received=angular.fromJson(data);
				return received;
			}).catch(function(data){
				console.log(data);
			});
		}
		
		
	}
});
	