app.controller("programCtrl", ["$scope", "programService", function ($scope, programService) {

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
    $scope.preFilter = function (area) {
        programService.nameArea = area;
    }

    //permite que al cargarse la pagina programs.html se muestren todos los programas
    $scope.$watch('$viewContentLoaded', function () {
        $scope.filter();
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
