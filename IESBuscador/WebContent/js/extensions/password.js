/**
 * 
 */

$(function comprobrarClave() {
	$('#password').keyup(function () {
        var _this = $('#password');
        var contrasenaNueva = $('#password').val();
        _this.attr('style', 'background:white');
        if (contrasenaNueva.charAt(0) == ' ') {
            _this.attr('style', 'background:#FF4A4A');
        }

        if (contrasenaNueva.val() == '') {
            _this.attr('style', 'background:#FF4A4A');
        }
    });
	
	
	$('#confirmPassword').keyup(function () {
        var contrasenaNueva = $('#password').val();
        var confirmarContrasena = $('#confirmPassword').val();
        var _this = $('#confirmPassword');
        _this.attr('style', 'background:white');
        if (contrasenaNueva != confirmarContrasena && confirmarContrasena != '') {
            _this.attr('style', 'background:#E11F1F ');
            return false;
        } else {
            if (confirmarContrasena == '') {
                _this.attr('style', 'background:white ');
            } else {
                _this.attr('style', 'background:#1FE145  ');
            }
        }
    });
});




