app.controller("personCtrl", ["$scope", "personService", "$cookieStore", "$window", function personCtrl($scope, personService, $cookieStore, $window) {

    //Register
    $scope.personForm = {};
    $scope.personForm.id = "";
    var contador = 1;
    $scope.addPerson = function (personForm) {
        //alert('Esto es lo que colocaron en Register' + JSON.stringify(personForm));
        var getCookie = $cookieStore.get('cookiePersonSession');
        if (!angular.isUndefined(getCookie)) {
            alert("Ahora mismo hay una sesión activa, para registrar cierra sesión primero");
            return;
        }
        if (angular.isUndefined(personForm.name) || angular.isUndefined(personForm.email) || angular.isUndefined(personForm.password) || angular.isUndefined(personForm.confirmPassword)) {
            alert("Completa todos los campos");
            return;
        } else {
            if (personForm.password != personForm.confirmPassword) {
                alert("Las contraseñas no son las mismas");
                return;
            } else {
                person = {
                    "id": personForm.id,
                    "name": personForm.name,
                    "email": personForm.email,
                    "password": personForm.password
                };
                personService.addPerson(person).then(function (message) {
                    if (message.data == "OK") {
                        alert("Registrado con éxito");
                        personForLogin = {
                            "email": personForm.email,
                            "password": personForm.password
                        };
                        $scope.logIn(personForLogin);
                    } else if (message.data == "EMAILERROR") {
                        alert("El correo ya esta en uso");
                    } else {
                        alert("No se ha podido registrar en nuestra base de datos");
                    }
                })
            }
        }
    }

    $scope.logOut = function () {
        var getCookie = $cookieStore.get('cookiePersonSession');
        if (!angular.isUndefined(getCookie)) {
            alert("Hasta luego " + getCookie.name);
            $cookieStore.remove('cookiePersonSession');
        } else {
            alert("No hay ninguna sesión");
        }
    }

    $scope.logOut2 = function () {
        var getCookie = $cookieStore.get('cookiePersonSession');
        if (!angular.isUndefined(getCookie)) {
            $cookieStore.remove('cookiePersonSession');
        } else {
            alert("No hay ninguna sesión");
        }
    }



    $scope.editProfile = function () {
        if (!angular.isUndefined(getCookie)) {
            $window.location.href = '../pages/editprofile.html';
            return;
        } else {
            alert("No hay una sesión activa en este momento");
        }
    }

    //Login
    $scope.personFormLogin = {};
    $scope.logIn = function (personFormLogin) {
        var getCookie = $cookieStore.get('cookiePersonSession');
        if (!angular.isUndefined(getCookie)) {
            alert("Ahora mismo hay una sesión activa");
            return;
        }
        var personSession = {};
        if (angular.isUndefined(personFormLogin.email) || angular.isUndefined(personFormLogin.password)) {
            alert("Completa todos los campos");
            return;
        } else {
            personService.findByEmail(personFormLogin.email).then(function (message) {
                if (message.data.id == 0 || message.data.name == null || message.data.email == null || message.data.password == null) {
                    alert("No reconocemos ese correo");
                } else {
                    if (message.data.password == personFormLogin.password) {
                        personSession.id = message.data.id;
                        personSession.name = message.data.name;
                        personSession.email = message.data.email;
                        personSession.password = message.data.password;
                        $cookieStore.put('cookiePersonSession', personSession);
                        var getCookie = $cookieStore.get('cookiePersonSession');
                        $window.location.href = '../pages/adminindex.html';
                    } else {
                        alert("El correo y/o la contraseña están incorrectas");
                    }
                }
            })
        }
    }



    $scope.checkCookie = function () {
        //		var getCookie = $cookieStore.get('cookiePersonSession');
        //		alert("El hijodeputa nombre es: "+getCookie.name);
        //		if(!angular.isUndefined(getCookie)){
        //			alert("Hay una sesión");
        //			return false;
        //		}
        //		else{
        //			alert("No hay una sesión");
        //			return true	
        //		}
        //		alert("contador "+contador);
        //		contador=contador+1;
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


    $scope.updatePerson = function (sessionData) {

        if (angular.isUndefined(sessionData.name) || angular.isUndefined(sessionData.password) || angular.isUndefined(sessionData.oldConfirmPassword) || angular.isUndefined(sessionData.newPassword) || angular.isUndefined(sessionData.newconfirmPassword)) {
            alert("Completa todos los campos");
            return;
        }
        if (sessionData.oldConfirmPassword != sessionData.password) {
            alert("La contraseña antigua no coincide");
            return;
        }
        if (sessionData.newPassword != sessionData.newconfirmPassword) {
            alert("La contraseña nueva no coincide");
            return;
        }
        var personUpdated = {
            "id": sessionData.id,
            "name": sessionData.name,
            "email": sessionData.email,
            "password": sessionData.newPassword
        };
        personService.updatePerson(personUpdated).then(function (message) {
            $scope.logOut2();
            personForLogin = {
                "email": sessionData.email,
                "password": sessionData.newPassword
            };
            $scope.logIn(personForLogin);
        })
    }

    function validarEmail(valor) {
        if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)) {
            return true;
        } else {
            return false;
        }
    }
}]);
