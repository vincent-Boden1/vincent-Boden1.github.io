$(document).ready(function(){
	$("#eerste").hide();
    $("#tweede").hide();
    $("#derde").hide();
    $("#vierde").hide();
    $("#vijfde").hide();
    $("#zesde").hide();
    $("#zevende").hide();
    $("#achtste").hide();
    $("#laatste").hide();

    /*Bron gebruik cookies: http://stackoverflow.com/questions/28533409/check-if-user-has-alread-visited-site-in-browser-session */

    setCookie = function (c_name,value,exdays) {
        var exdate=new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var expires = exdate.toUTCString();
        var isIE8 = (document.documentMode !== undefined);
        if (exdays == 0) {
            expires = (isIE8 == true) ? "" : "0";
        }
        var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+expires);
        document.cookie=c_name + "=" + c_value;
    };

    getCookie = function(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
        }
        return "";
    };

    deleteCookie = function(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };

    $('#herstart').click(function () {
        deleteCookie('visited');
    });

    if (getCookie('visited')) {
        setTimeout(function(){
            $("#laatste").fadeIn(2000);
        }, 100);
    } else {
        setCookie('visited', 'true', 1);

        setTimeout(function(){
            $("#eerste").fadeIn(4000);
        }, 100);
        setTimeout(function(){
            $("#eerste").fadeOut(4000);
        }, 7000);
        setTimeout(function(){
            $("#tweede").fadeIn(4000);
        }, 5000);
        setTimeout(function(){
            $("#tweede").fadeOut(4000);
        }, 14000);
        setTimeout(function(){
            $("#derde").fadeIn(4000);
        }, 12000);
        setTimeout(function(){
            $("#derde").fadeOut(4000);
        }, 21000);
        setTimeout(function(){
            $("#vierde").fadeIn(4000);
        }, 19000);
        setTimeout(function(){
            $("#vierde").fadeOut(4000);
        }, 28000);
        setTimeout(function(){
            $("#vijfde").fadeIn(4000);
        }, 26000);
        setTimeout(function(){
            $("#vijfde").fadeOut(4000);
        }, 35000);
        setTimeout(function(){
            $("#zesde").fadeIn(4000);
        }, 33000);
        setTimeout(function(){
            $("#zesde").fadeOut(4000);
        }, 42000);
        setTimeout(function(){
            $("#zevende").fadeIn(4000);
        }, 40000);
        setTimeout(function(){
            $("#zevende").fadeOut(4000);
        }, 49000);
        setTimeout(function(){
            $("#achtste").fadeIn(4000);
        }, 47000);
        setTimeout(function(){
            $("#achtste").fadeOut(4000);
        }, 56000);
        setTimeout(function(){
            $("#laatste").fadeIn(4000);
        }, 54000);
    }

    $("#skip").click(function() {
        $("#eerste").css("display", "none");
        $("#tweede").css("display", "none");
        $("#derde").css("display", "none");
        $("#vierde").css("display", "none");
        $("#vijfde").css("display", "none");
        $("#zesde").css("display", "none");
        $("#zevende").css("display", "none");
        $("#achtste").css("display", "none");
        setTimeout(function(){
            $("#laatste").fadeIn(1000);
            $("#skip").css("display", "none");
        }, 100);
    });
});