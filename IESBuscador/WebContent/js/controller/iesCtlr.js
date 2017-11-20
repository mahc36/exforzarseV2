app.controller("iesCtlr", ["$scope", "$window","$cookieStore", "iesService", function iesCtlr($scope, $window,$cookieStore, iesService) {
    $scope.Ies = [];
    $scope.answer = "";
    $scope.iesid = "";
    $scope.getList = function () {
        iesService.getList().then(function (message) {
            $scope.answer = "Todas las IES";
            $scope.Ies = message.data;
            if ($scope.Ies === []) {
                alert("No hay ninguna IES registrada");
            }
        });
    }
    
    $scope.alertMessage = function () {
       alert("Página en construción");
       $window.location.href = '../index.html';
    }
    
    $scope.findIES = function (nameSearch) {
        if (nameSearch == null) {
            alert("Debe indicar el nombre de la IES a buscar");
        } else {
            iesService.findIES(nameSearch).then(function (message) {
                if (message.data.length == 0) {
                    alert("No hay ninguna IES con este nombre");
                } else {
                    $scope.answer = nameSearch;
                    $scope.Ies = message.data;
                }
            });
        }
    }
    $scope.visitSite = function (iesid) {
        $window.location.href = 'universitydetails.html';
    }
    $scope.getInfo = function () {
        iesService.getInfo(iesid).then(function (message) {
            $scope.iesdata = message.data;
        });
    }


    $scope.iesForm = {};
    $scope.iesForm.id = "";
    $scope.iesForm.logo = "/img/udelavida.png";
    $scope.adUniversity = function (iesForm) {

        if (angular.isUndefined(iesForm.name) || angular.isUndefined(iesForm.slogan) || angular.isUndefined(iesForm.type) || angular.isUndefined(iesForm.accreditation)) {
            alert("Completa todos los campos");
            return;
        }
        var type = "publica";
        if (iesForm.type) {
            type = "privada";
        }

        ies = {
            "id": iesForm.id,
            "name": iesForm.name,
            "slogan": iesForm.slogan,
            "escudo": iesForm.logo,
            "caracter": type,
            "accreditation": iesForm.accreditation
        };
        iesService.addUniversity(ies).then(function (message) {
            alert("Registro: " + message.data);
        });
    }
    
    
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
    


}]);
