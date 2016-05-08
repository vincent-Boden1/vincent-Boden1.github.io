/* Created by vin-c on 16/04/2016. */
function ToonInfoPlaneten() {
    var locatie = document.getElementById("myRange").value;

    function nietgeselecteerd() {
        document.getElementById("zon").style.display = "none";
        document.getElementById("mercurius").style.display = "none";
        document.getElementById("venus").style.display = "none";
        document.getElementById("aarde").style.display = "none";
        document.getElementById("mars").style.display = "none";
        document.getElementById("jupiter").style.display = "none";
        document.getElementById("saturnus").style.display = "none";
        document.getElementById("uranus").style.display = "none";
        document.getElementById("neptunus").style.display = "none";
        document.getElementById("pluto").style.display = "none";
    }

    /*Controleren van de huidige locatie*/
    if (locatie == 0 || locatie == 5) {
        nietgeselecteerd();
        document.getElementById("zon").style.display = "inline";
    }
    if (locatie == 10 || locatie == 15 || locatie == 20) {
        nietgeselecteerd();
        document.getElementById("mercurius").style.display = "inline";
    }
    if (locatie == 25 || locatie == 30 || locatie == 35) {
        nietgeselecteerd();
        document.getElementById("venus").style.display = "inline";
    }
    if (locatie == 40 || locatie == 45 || locatie == 50) {
        nietgeselecteerd();
        document.getElementById("aarde").style.display = "inline";
    }
    if (locatie == 55 || locatie == 60 || locatie == 65) {
        nietgeselecteerd();
        document.getElementById("mars").style.display = "inline";
    }
    if (locatie == 70 || locatie == 75 || locatie == 80) {
        nietgeselecteerd();
        document.getElementById("jupiter").style.display = "inline";
    }
    if (locatie == 85 || locatie == 90 || locatie == 95) {
        nietgeselecteerd();
        document.getElementById("saturnus").style.display = "inline";
    }
    if (locatie == 100 || locatie == 105 || locatie == 110) {
        nietgeselecteerd();
        document.getElementById("uranus").style.display = "inline";
    }
    if (locatie == 115 || locatie == 120 || locatie == 125) {
        nietgeselecteerd();
        document.getElementById("neptunus").style.display = "inline";
    }
    if (locatie == 130 || locatie == 135) {
        nietgeselecteerd();
        document.getElementById("pluto").style.display = "inline";
    }
}