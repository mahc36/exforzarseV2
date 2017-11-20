app.controller("campusCtrl", ["$scope", "campusService","$cookieStore","$window", function ($scope, campusService,$cookieStore,$window) {

	
	$scope.sessionData = {};
    $scope.checkSession = function () {
        var getCookie = $cookieStore.get('cookiePersonSession');
        if (angular.isUndefined(getCookie)) {
            alert("Debe iniciar sesion primero");
            $window.location.href = 'login.html';
            return;
        } else {
            $scope.sessionData.id = getCookie.id;
            $scope.sessionData.name = getCookie.name;
            $scope.sessionData.email = getCookie.email;
            $scope.sessionData.password = getCookie.password;
        }
    }

    $scope.campusForm = {};

    $scope.listOfCampus = {}
    $scope.listCampus = function () {
        campusService.listCampus().then(function (message) {
            if (message.data.length != 0) {
                $scope.listOfCampus = message.data;
            } else {
                alert("No hay ningun campus");
            }
            /*for ( var i=0; i<message.data.length ;++i) {
            	alert("esto traje: "+message.data[i].id);
            }*/
        })
    }


    $scope.campusForm = {};
    $scope.addCampus = function (campusForm) {
        if (angular.isUndefined(campusForm.name) || angular.isUndefined(campusForm.location) || angular.isUndefined(campusForm.phone) || angular.isUndefined(campusForm.email) || angular.isUndefined(campusForm.university)) {
            alert("Completa todos los campos");
            return;
        }
        campus = {
            "id": "",
            "location": campusForm.location,
            "latitude": "1.3442",
            "longitude": "1.4253",
            "name": campusForm.name,
            "city": campusForm.city,
            "phone": campusForm.phone,
            "email": campusForm.email,
            "id_ies": campusForm.university
        };
        campusService.addCampus(campus).then(function (message) {
            alert(message.data);
        })
    }



            }]);
