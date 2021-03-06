app.controller("programCtrl", ["$scope", "programService","$cookieStore","$window", function ($scope, programService,$cookieStore,$window) {

	
	
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
	
	
	
    $scope.programList = [];
    $scope.programs = [];
    $scope.priceFilter = "";
    $scope.filter = function () {
        programService.filter().then(function (message) {
            //alert('Esto es lo giovinco trajo de la base de datos' + JSON.stringify(message.data));
            $scope.programList = message.data;
            for (var i = 0; i < $scope.programList[0].length; i++) {
                $scope.programs.push($.extend($scope.programList[0][i], $scope.programList[1][i], $scope.programList[2][i]));
            }

            if ($scope.programList === {}) {
                alert("No hay programas");
            }
        })
    }

    $scope.programForm = {}
    $scope.programForm.id = "";
    $scope.addProgram = function (programForm) {
        if (angular.isUndefined(programForm.name) || angular.isUndefined(programForm.academicLevel) || angular.isUndefined(programForm.modality) || angular.isUndefined(programForm.credits) || angular.isUndefined(programForm.creditCost) || angular.isUndefined(programForm.camID) || angular.isUndefined(programForm.knowledgeArea)) {
            alert("Completa todos los campos");
            return;
        }
        program = {
            "id": programForm.id,
            "program_name": programForm.name,
            "academic_level": programForm.academicLevel,
            "modality": programForm.modality,
            "credits": programForm.credits,
            "credit_cost": programForm.creditCost,
            "knowledge_area": programForm.knowledgeArea,
            "id_campus": programForm.camID
        };
        //alert(program);
        console.log(program);
        programService.addProgram(program).then(function (message) {
            alert(message.data);
        })

    }

    $scope.listOfCampus = {}
    $scope.listCampus = function () {
        programService.listCampus().then(function (message) {
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


    $scope.preFilter = function (area) {
        programService.nameArea = area;
    }

    //permite que al cargarse la pagina programs.html se muestren todos los programas
    $scope.$watch('$viewContentLoaded', function () {
        $scope.filter();
        $scope.listCampus();
    });

    $scope.priceRange = function (value) {
        if ($scope.priceFilter == 1) {
            if (value.creditCost >= 500000 && value.creditCost < 1500000) {
                return true;
            }
        } else if ($scope.priceFilter == 2) {
            if (value.creditCost >= 1500000 && value.creditCost < 2800000) {
                return true;
            }
        } else if ($scope.priceFilter == 3) {
            if (value.creditCost >= 2800000) {
                return true;
            }
        } else if ($scope.priceFilter == "") {
            return true;
        }
    }
}]);
