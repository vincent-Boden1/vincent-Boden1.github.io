/* Created by vin-c on 16/04/2016. */
function myFunction() {

    var x = document.getElementById("myRange").value;

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

    if (x == 0 || x == 5) {
        nietgeselecteerd();
        document.getElementById("zon").style.display = "inline";
    }
    if (x == 10 || x == 15 || x == 20) {
        nietgeselecteerd();
        document.getElementById("mercurius").style.display = "inline";
    }
    if (x == 25 || x == 30 || x == 35) {
        nietgeselecteerd();
        document.getElementById("venus").style.display = "inline";
    }
    if (x == 40 || x == 45 || x == 50) {
        nietgeselecteerd();
        document.getElementById("aarde").style.display = "inline";
    }
    if (x == 55 || x == 60 || x == 65) {
        nietgeselecteerd();
        document.getElementById("mars").style.display = "inline";
    }
    if (x == 70 || x == 75 || x == 80) {
        nietgeselecteerd();
        document.getElementById("jupiter").style.display = "inline";
    }
    if (x == 85 || x == 90 || x == 95) {
        nietgeselecteerd();
        document.getElementById("saturnus").style.display = "inline";
    }
    if (x == 100 || x == 105 || x == 110) {
        nietgeselecteerd();
        document.getElementById("uranus").style.display = "inline";
    }
    if (x == 115 || x == 120 || x == 125) {
        nietgeselecteerd();
        document.getElementById("neptunus").style.display = "inline";
    }
    if (x == 130 || x == 135) {
        nietgeselecteerd();
        document.getElementById("pluto").style.display = "inline";
    }
}