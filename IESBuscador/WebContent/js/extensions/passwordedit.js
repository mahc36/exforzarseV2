$(function comprobrarClave() {
	$('#oldPassword').keyup(function () {
        var _this = $('#oldPassword');
        var contrasenaNueva = $('#oldPassword').val();
        _this.attr('style', 'background:white');
        if (contrasenaNueva.charAt(0) == ' ') {
            _this.attr('style', 'background:#FF4A4A');
        }

        if (contrasenaNueva.val() == '') {
            _this.attr('style', 'background:#FF4A4A');
        }
    });
	
	
	$('#oldConfirmPassword').keyup(function () {
        var contrasenaNueva = $('#oldPassword').val();
        var confirmarContrasena = $('#oldConfirmPassword').val();
        var _this = $('#oldConfirmPassword');
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


$(function comprobrarClave2() {
	$('#newpassword').keyup(function () {
        var _this = $('#newpassword');
        var contrasenaNueva = $('#newpassword').val();
        _this.attr('style', 'background:white');
        if (contrasenaNueva.charAt(0) == ' ') {
            _this.attr('style', 'background:#FF4A4A');
        }

        if (contrasenaNueva.val() == '') {
            _this.attr('style', 'background:#FF4A4A');
        }
    });
	
	
	$('#newconfirmPassword').keyup(function () {
        var contrasenaNueva = $('#newpassword').val();
        var confirmarContrasena = $('#newconfirmPassword').val();
        var _this = $('#newconfirmPassword');
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