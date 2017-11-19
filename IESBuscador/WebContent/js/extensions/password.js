/**
 * 
 */

$(function comprobrarClave() {
    $('#password').keyup(function () {
        var _this = $('#password');
        var contrasenaNueva = $('#password').val();
        _this.attr('style', 'background:white');
        if (contrasenaNueva.charAt(0) == ' ') {
            _this.attr('style', 'background-color: #ffaeae;border: 2px solid red');
        }

        if (contrasenaNueva == '') {
            _this.attr('style', 'background-color: #ffaeae;border: 2px solid red');
        }
    });


    $('#confirmPassword').keyup(function () {
        var contrasenaNueva = $('#password').val();
        var confirmarContrasena = $('#confirmPassword').val();
        var _this = $('#confirmPassword');
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
