$(function comprobrarClave() {
    $('#oldPassword').keyup(function () {
        var _this = $('#oldPassword');
        var contrasenaNueva = $('#oldPassword').val();
        _this.attr('style', 'background:white');
        if (contrasenaNueva.charAt(0) == ' ') {
            _this.attr('style', 'background-color: #ffaeae;border: 2px solid red');
        }

        if (contrasenaNueva == '') {
            _this.attr('style', 'background-color: #ffaeae;border: 2px solid red');
        }
    });


    $('#oldConfirmPassword').keyup(function () {
        var contrasenaNueva = $('#oldPassword').val();
        var confirmarContrasena = $('#oldConfirmPassword').val();
        var _this = $('#oldConfirmPassword');
        _this.attr('style', 'background:white');
        if (contrasenaNueva != confirmarContrasena && confirmarContrasena != '') {
            _this.attr('style', 'background-color: #ffaeae;border: 2px solid red');
            return false;
        } else {
            if (confirmarContrasena == '') {
                _this.attr('style', 'background:white ');
            } else {
                _this.attr('style', 'border: 2px solid #2ecc71;background-color: #b4ffae;');
            }
        }
    });
});


$(function comprobrarClave2() {
    $('#newpassword').keyup(function () {
        var _this = $('#newpassword');
        var contrasenaNueva = $('#newpassword').val();
        _this.attr('style', 'background:white');
        if (contrasenaNueva.charAt(0) == ' ') {
            _this.attr('style', 'background-color: #ffaeae;border: 2px solid red');
        }

        if (contrasenaNueva == '') {
            _this.attr('style', 'background-color: #ffaeae;border: 2px solid red');
        }
    });


    $('#newconfirmPassword').keyup(function () {
        var contrasenaNueva = $('#newpassword').val();
        var confirmarContrasena = $('#newconfirmPassword').val();
        var _this = $('#newconfirmPassword');
        _this.attr('style', 'background:white');
        if (contrasenaNueva != confirmarContrasena && confirmarContrasena != '') {
            _this.attr('style', 'background-color: #ffaeae;border: 2px solid red');
            return false;
        } else {
            if (confirmarContrasena == '') {
                _this.attr('style', 'background:white ');
            } else {
                _this.attr('style', 'border: 2px solid #2ecc71;background-color: #b4ffae;');
            }
        }
    });
});
