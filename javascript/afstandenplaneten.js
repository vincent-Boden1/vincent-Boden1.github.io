/* Created by vin-c on 17/04/2016. */
function BerekeningAfstandPlaneten1() {
    /*Opvragen van de waarden op dat moment*/
    var KeuzeOptie11 = document.getElementById("planeten1").value;
    document.getElementById("planeet1").innerHTML = KeuzeOptie11;
    var KeuzeOptie12 = document.getElementById("planeten2").value;

    /*Afbeeldingen creëren + laden*/
    if (KeuzeOptie11 == "Zon") {
        var img1 = new Image();
        var div1 = document.getElementById('planeet1');
        img1.onload = function() {
            div1.innerHTML += '<img src="'+img1.src+'" />';
        };
        img1.src = '../images/zon.jpg';
    }
    if (KeuzeOptie11 == "Mercurius") {
        var img2 = new Image();
        var div2 = document.getElementById('planeet1');
        img2.onload = function() {
            div2.innerHTML += '<img src="'+img2.src+'" />';
        };
        img2.src = '../images/mercurius.jpg';
    }
    if (KeuzeOptie11 == "Venus") {
        var img3 = new Image();
        var div3 = document.getElementById('planeet1');
        img3.onload = function() {
            div3.innerHTML += '<img src="'+img3.src+'" />';
        };
        img3.src = '../images/venus.jpg';
    }
    if (KeuzeOptie11 == "Aarde") {
        var img4 = new Image();
        var div4 = document.getElementById('planeet1');
        img4.onload = function() {
            div4.innerHTML += '<img src="'+img4.src+'" />';
        };
        img4.src = '../images/aarde.jpg';
    }
    if (KeuzeOptie11 == "Mars") {
        var img5 = new Image();
        var div5 = document.getElementById('planeet1');
        img5.onload = function() {
            div5.innerHTML += '<img src="'+img5.src+'" />';
        };
        img5.src = '../images/mars.jpg';
    }
    if (KeuzeOptie11 == "Jupiter") {
        var img6 = new Image();
        var div6 = document.getElementById('planeet1');
        img6.onload = function() {
            div6.innerHTML += '<img src="'+img6.src+'" />';
        };
        img6.src = '../images/jupiter.jpg';
    }
    if (KeuzeOptie11 == "Saturnus") {
        var img7 = new Image();
        var div7 = document.getElementById('planeet1');
        img7.onload = function() {
            div7.innerHTML += '<img src="'+img7.src+'" />';
        };
        img7.src = '../images/saturnus.jpg';
    }
    if (KeuzeOptie11 == "Uranus") {
        var img8 = new Image();
        var div8 = document.getElementById('planeet1');
        img8.onload = function() {
            div8.innerHTML += '<img src="'+img8.src+'" />';
        };
        img8.src = '../images/uranus.jpg';
    }
    if (KeuzeOptie11 == "Neptunus") {
        var img9 = new Image();
        var div9 = document.getElementById('planeet1');
        img9.onload = function() {
            div9.innerHTML += '<img src="'+img9.src+'" />';
        };
        img9.src = '../images/neptunus.jpg';
    }
    if (KeuzeOptie11 == "Pluto") {
        var img10 = new Image();
        var div10 = document.getElementById('planeet1');
        img10.onload = function() {
            div10.innerHTML += '<img src="'+img10.src+'" />';
        };
        img10.src = '../images/pluto.jpg';
    }

    /*Zon*/
    if (KeuzeOptie11 == "Zon" && KeuzeOptie12 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (KeuzeOptie11 == "Zon" && KeuzeOptie12 == "Mercurius" ||  KeuzeOptie11 == "Mercurius" && KeuzeOptie12 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 57 910 000 km";
    }
    if (KeuzeOptie11 == "Zon" && KeuzeOptie12 == "Venus" ||  KeuzeOptie11 == "Venus" && KeuzeOptie12 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 108 208 930 km";
    }
    if (KeuzeOptie11 == "Zon" && KeuzeOptie12 == "Aarde" ||  KeuzeOptie11 == "Aarde" && KeuzeOptie12 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 149 597 870 km";
    }
    if (KeuzeOptie11 == "Zon" && KeuzeOptie12 == "Mars" ||  KeuzeOptie11 == "Mars" && KeuzeOptie12 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 227 936 640 km";
    }
    if (KeuzeOptie11 == "Zon" && KeuzeOptie12 == "Jupiter" ||  KeuzeOptie11 == "Jupiter" && KeuzeOptie12 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 778 412 010 km";
    }
    if (KeuzeOptie11 == "Zon" && KeuzeOptie12 == "Saturnus" ||  KeuzeOptie11 == "Saturnus" && KeuzeOptie12 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 426 725 400 km";
    }
    if (KeuzeOptie11 == "Zon" && KeuzeOptie12 == "Uranus" ||  KeuzeOptie11 == "Uranus" && KeuzeOptie12 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 2 870 972 200 km";
    }
    if (KeuzeOptie11 == "Zon" && KeuzeOptie12 == "Neptunus" ||  KeuzeOptie11 == "Neptunus" && KeuzeOptie12 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 4 498 252 900 km";
    }
    if (KeuzeOptie11 == "Zon" && KeuzeOptie12 == "Pluto" ||  KeuzeOptie11 == "Pluto" && KeuzeOptie12 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 4 446 000 000 km en 7 381 000 000 km";
    }

    /*Mercurius*/
    if (KeuzeOptie11 == "Mercurius" && KeuzeOptie12 == "Mercurius" ||  KeuzeOptie11 == "Mercurius" && KeuzeOptie12 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (KeuzeOptie11 == "Mercurius" && KeuzeOptie12 == "Venus" ||  KeuzeOptie11 == "Venus" && KeuzeOptie12 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 50 298 930 km";
    }
    if (KeuzeOptie11 == "Mercurius" && KeuzeOptie12 == "Aarde" ||  KeuzeOptie11 == "Aarde" && KeuzeOptie12 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 91 687 870 km";
    }
    if (KeuzeOptie11 == "Mercurius" && KeuzeOptie12 == "Mars" ||  KeuzeOptie11 == "Mars" && KeuzeOptie12 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 170 026 640 km";
    }
    if (KeuzeOptie11 == "Mercurius" && KeuzeOptie12 == "Jupiter" ||  KeuzeOptie11 == "Jupiter" && KeuzeOptie12 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 720 502 010 km";
    }
    if (KeuzeOptie11 == "Mercurius" && KeuzeOptie12 == "Saturnus" ||  KeuzeOptie11 == "Saturnus" && KeuzeOptie12 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 426 725 400 km";
    }
    if (KeuzeOptie11 == "Mercurius" && KeuzeOptie12 == "Uranus" ||  KeuzeOptie11 == "Uranus" && KeuzeOptie12 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 2 813 062 200 km";
    }
    if (KeuzeOptie11 == "Mercurius" && KeuzeOptie12 == "Neptunus" ||  KeuzeOptie11 == "Neptunus" && KeuzeOptie12 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 4 440 342 900 km";
    }
    if (KeuzeOptie11 == "Mercurius" && KeuzeOptie12 == "Pluto" ||  KeuzeOptie11 == "Pluto" && KeuzeOptie12 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 4 388 090 000 km en 7 323 090 000 km";
    }

    /*Venus*/
    if (KeuzeOptie11 == "Venus" && KeuzeOptie12 == "Venus" ||  KeuzeOptie11 == "Venus" && KeuzeOptie12 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (KeuzeOptie11 == "Venus" && KeuzeOptie12 == "Aarde" ||  KeuzeOptie11 == "Aarde" && KeuzeOptie12 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 41 388 940 km";
    }
    if (KeuzeOptie11 == "Venus" && KeuzeOptie12 == "Mars" ||  KeuzeOptie11 == "Mars" && KeuzeOptie12 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 119 727 710 km";
    }
    if (KeuzeOptie11 == "Venus" && KeuzeOptie12 == "Jupiter" ||  KeuzeOptie11 == "Jupiter" && KeuzeOptie12 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 670 203 080 km";
    }
    if (KeuzeOptie11 == "Venus" && KeuzeOptie12 == "Saturnus" ||  KeuzeOptie11 == "Saturnus" && KeuzeOptie12 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 318 516 470 km";
    }
    if (KeuzeOptie11 == "Venus" && KeuzeOptie12 == "Uranus" ||  KeuzeOptie11 == "Uranus" && KeuzeOptie12 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 2 762 763 270 km";
    }
    if (KeuzeOptie11 == "Venus" && KeuzeOptie12 == "Neptunus" ||  KeuzeOptie11 == "Neptunus" && KeuzeOptie12 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 4 390 043 970 km";
    }
    if (KeuzeOptie11 == "Venus" && KeuzeOptie12 == "Pluto" ||  KeuzeOptie11 == "Pluto" && KeuzeOptie12 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 4 337 791 070 km en 7 272 791 070 km";
    }

    /*Aarde*/
    if (KeuzeOptie11 == "Aarde" && KeuzeOptie12 == "Aarde" ||  KeuzeOptie11 == "Aarde" && KeuzeOptie12 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (KeuzeOptie11 == "Aarde" && KeuzeOptie12 == "Mars" ||  KeuzeOptie11 == "Mars" && KeuzeOptie12 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 78 338 770 km";
    }
    if (KeuzeOptie11 == "Aarde" && KeuzeOptie12 == "Jupiter" ||  KeuzeOptie11 == "Jupiter" && KeuzeOptie12 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 628 814 140 km";
    }
    if (KeuzeOptie11 == "Aarde" && KeuzeOptie12 == "Saturnus" ||  KeuzeOptie11 == "Saturnus" && KeuzeOptie12 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 277 127 530 km";
    }
    if (KeuzeOptie11 == "Aarde" && KeuzeOptie12 == "Uranus" ||  KeuzeOptie11 == "Uranus" && KeuzeOptie12 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 2 721 374 330 km";
    }
    if (KeuzeOptie11 == "Aarde" && KeuzeOptie12 == "Neptunus" ||  KeuzeOptie11 == "Neptunus" && KeuzeOptie12 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 4 348 655 030 km";
    }
    if (KeuzeOptie11 == "Aarde" && KeuzeOptie12 == "Pluto" ||  KeuzeOptie11 == "Pluto" && KeuzeOptie12 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 4 296 402 130 km en 7 231 402 130 km";
    }

    /*Mars*/
    if (KeuzeOptie11 == "Mars" && KeuzeOptie12 == "Mars" ||  KeuzeOptie11 == "Mars" && KeuzeOptie12 == "Mars") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (KeuzeOptie11 == "Mars" && KeuzeOptie12 == "Jupiter" ||  KeuzeOptie11 == "Jupiter" && KeuzeOptie12 == "Mars") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 550 475 370 km";
    }
    if (KeuzeOptie11 == "Mars" && KeuzeOptie12 == "Saturnus" ||  KeuzeOptie11 == "Saturnus" && KeuzeOptie12 == "Mars") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 198 788 760 km";
    }
    if (KeuzeOptie11 == "Mars" && KeuzeOptie12 == "Uranus" ||  KeuzeOptie11 == "Uranus" && KeuzeOptie12 == "Mars") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 2 643 035 560 km";
    }
    if (KeuzeOptie11 == "Mars" && KeuzeOptie12 == "Neptunus" ||  KeuzeOptie11 == "Neptunus" && KeuzeOptie12 == "Mars") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 4 270 316 260 km";
    }
    if (KeuzeOptie11 == "Mars" && KeuzeOptie12 == "Pluto" ||  KeuzeOptie11 == "Pluto" && KeuzeOptie12 == "Mars") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 4 218 063 360 km en 7 153 063 360 km";
    }

    /*Jupiter*/
    if (KeuzeOptie11 == "Jupiter" && KeuzeOptie12 == "Jupiter" ||  KeuzeOptie11 == "Jupiter" && KeuzeOptie12 == "Jupiter") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (KeuzeOptie11 == "Jupiter" && KeuzeOptie12 == "Saturnus" ||  KeuzeOptie11 == "Saturnus" && KeuzeOptie12 == "Jupiter") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 648 313 390 km";
    }
    if (KeuzeOptie11 == "Jupiter" && KeuzeOptie12 == "Uranus" ||  KeuzeOptie11 == "Uranus" && KeuzeOptie12 == "Jupiter") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 2 092 560 190 km";
    }
    if (KeuzeOptie11 == "Jupiter" && KeuzeOptie12 == "Neptunus" ||  KeuzeOptie11 == "Neptunus" && KeuzeOptie12 == "Jupiter") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 3 719 840 890 km";
    }
    if (KeuzeOptie11 == "Jupiter" && KeuzeOptie12 == "Pluto" ||  KeuzeOptie11 == "Pluto" && KeuzeOptie12 == "Jupiter") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 3 667 587 990 km en 6 602 587 990 km";
    }

    /*Saturnus*/
    if (KeuzeOptie11 == "Saturnus" && KeuzeOptie12 == "Saturnus" ||  KeuzeOptie11 == "Saturnus" && KeuzeOptie12 == "Saturnus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (KeuzeOptie11 == "Saturnus" && KeuzeOptie12 == "Uranus" ||  KeuzeOptie11 == "Uranus" && KeuzeOptie12 == "Saturnus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 444 246 800 km";
    }
    if (KeuzeOptie11 == "Saturnus" && KeuzeOptie12 == "Neptunus" ||  KeuzeOptie11 == "Neptunus" && KeuzeOptie12 == "Saturnus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 3 071 527 500 km";
    }
    if (KeuzeOptie11 == "Saturnus" && KeuzeOptie12 == "Pluto" ||  KeuzeOptie11 == "Pluto" && KeuzeOptie12 == "Saturnus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 3 019 274 600 km en 5 954 274 600 km";
    }

    /*Uranus*/
    if (KeuzeOptie11 == "Uranus" && KeuzeOptie12 == "Uranus" ||  KeuzeOptie11 == "Uranus" && KeuzeOptie12 == "Uranus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (KeuzeOptie11 == "Uranus" && KeuzeOptie12 == "Neptunus" ||  KeuzeOptie11 == "Neptunus" && KeuzeOptie12 == "Uranus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 627 280 700 km";
    }
    if (KeuzeOptie11 == "Uranus" && KeuzeOptie12 == "Pluto" ||  KeuzeOptie11 == "Pluto" && KeuzeOptie12 == "Uranus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 1 575 027 800 km en 4 510 027 800 km";
    }

    /*Neptunus*/
    if (KeuzeOptie11 == "Neptunus" && KeuzeOptie12 == "Neptunus" ||  KeuzeOptie11 == "Neptunus" && KeuzeOptie12 == "Neptunus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (KeuzeOptie11 == "Neptunus" && KeuzeOptie12 == "Pluto" ||  KeuzeOptie11 == "Pluto" && KeuzeOptie12 == "Neptunus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 52 252 900 km en 2 882 747 100 km";
    }

    /*Pluto*/
    if (KeuzeOptie11 == "Pluto" && KeuzeOptie12 == "Pluto" ||  KeuzeOptie11 == "Pluto" && KeuzeOptie12 == "Pluto") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
}

function BerekeningAfstandPlaneten2() {
    /*Opvragen van de waarden op dat moment*/
    var KeuzeOptie21 = document.getElementById("planeten2").value;
    document.getElementById("planeet2").innerHTML = KeuzeOptie21;
    var KeuzoOptie22 = document.getElementById("planeten1").value;

    /*Afbeeldingen creëren + laden*/
    if (KeuzeOptie21 == "Zon") {
        var img1 = new Image();
        var div1 = document.getElementById('planeet2');
        img1.onload = function() {
            div1.innerHTML += '<img src="'+img1.src+'" />';
        };
        img1.src = '../images/zon.jpg';
    }
    if (KeuzeOptie21 == "Mercurius") {
        var img2 = new Image();
        var div2 = document.getElementById('planeet2');
        img2.onload = function() {
            div2.innerHTML += '<img src="'+img2.src+'" />';
        };
        img2.src = '../images/mercurius.jpg';
    }
    if (KeuzeOptie21 == "Venus") {
        var img3 = new Image();
        var div3 = document.getElementById('planeet2');
        img3.onload = function() {
            div3.innerHTML += '<img src="'+img3.src+'" />';
        };
        img3.src = '../images/venus.jpg';
    }
    if (KeuzeOptie21 == "Aarde") {
        var img4 = new Image();
        var div4 = document.getElementById('planeet2');
        img4.onload = function() {
            div4.innerHTML += '<img src="'+img4.src+'" />';
        };
        img4.src = '../images/aarde.jpg';
    }
    if (KeuzeOptie21 == "Mars") {
        var img5 = new Image();
        var div5 = document.getElementById('planeet2');
        img5.onload = function() {
            div5.innerHTML += '<img src="'+img5.src+'" />';
        };
        img5.src = '../images/mars.jpg';
    }
    if (KeuzeOptie21 == "Jupiter") {
        var img6 = new Image();
        var div6 = document.getElementById('planeet2');
        img6.onload = function() {
            div6.innerHTML += '<img src="'+img6.src+'" />';
        };
        img6.src = '../images/jupiter.jpg';
    }
    if (KeuzeOptie21 == "Saturnus") {
        var img7 = new Image();
        var div7 = document.getElementById('planeet2');
        img7.onload = function() {
            div7.innerHTML += '<img src="'+img7.src+'" />';
        };
        img7.src = '../images/saturnus.jpg';
    }
    if (KeuzeOptie21 == "Uranus") {
        var img8 = new Image();
        var div8 = document.getElementById('planeet2');
        img8.onload = function() {
            div8.innerHTML += '<img src="'+img8.src+'" />';
        };
        img8.src = '../images/uranus.jpg';
    }
    if (KeuzeOptie21 == "Neptunus") {
        var img9 = new Image();
        var div9 = document.getElementById('planeet2');
        img9.onload = function() {
            div9.innerHTML += '<img src="'+img9.src+'" />';
        };
        img9.src = '../images/neptunus.jpg';
    }
    if (KeuzeOptie21 == "Pluto") {
        var img10 = new Image();
        var div10 = document.getElementById('planeet2');
        img10.onload = function() {
            div10.innerHTML += '<img src="'+img10.src+'" />';
        };
        img10.src = '../images/pluto.jpg';
    }

    /*Zon*/
    if (KeuzeOptie21 == "Zon" && KeuzoOptie22 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (KeuzeOptie21 == "Zon" && KeuzoOptie22 == "Mercurius" ||  KeuzeOptie21 == "Mercurius" && KeuzoOptie22 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 57 910 000 km";
    }
    if (KeuzeOptie21 == "Zon" && KeuzoOptie22 == "Venus" ||  KeuzeOptie21 == "Venus" && KeuzoOptie22 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 108 208 930 km";
    }
    if (KeuzeOptie21 == "Zon" && KeuzoOptie22 == "Aarde" ||  KeuzeOptie21 == "Aarde" && KeuzoOptie22 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 149 597 870 km";
    }
    if (KeuzeOptie21 == "Zon" && KeuzoOptie22 == "Mars" ||  KeuzeOptie21 == "Mars" && KeuzoOptie22 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 227 936 640 km";
    }
    if (KeuzeOptie21 == "Zon" && KeuzoOptie22 == "Jupiter" ||  KeuzeOptie21 == "Jupiter" && KeuzoOptie22 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 778 412 010 km";
    }
    if (KeuzeOptie21 == "Zon" && KeuzoOptie22 == "Saturnus" ||  KeuzeOptie21 == "Saturnus" && KeuzoOptie22 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 426 725 400 km";
    }
    if (KeuzeOptie21 == "Zon" && KeuzoOptie22 == "Uranus" ||  KeuzeOptie21 == "Uranus" && KeuzoOptie22 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 2 870 972 200 km";
    }
    if (KeuzeOptie21 == "Zon" && KeuzoOptie22 == "Neptunus" ||  KeuzeOptie21 == "Neptunus" && KeuzoOptie22 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 4 498 252 900 km";
    }
    if (KeuzeOptie21 == "Zon" && KeuzoOptie22 == "Pluto" ||  KeuzeOptie21 == "Pluto" && KeuzoOptie22 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 4 446 000 000 km en 7 381 000 000 km";
    }

    /*Mercurius*/
    if (KeuzeOptie21 == "Mercurius" && KeuzoOptie22 == "Mercurius" ||  KeuzeOptie21 == "Mercurius" && KeuzoOptie22 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (KeuzeOptie21 == "Mercurius" && KeuzoOptie22 == "Venus" ||  KeuzeOptie21 == "Venus" && KeuzoOptie22 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 50 298 930 km";
    }
    if (KeuzeOptie21 == "Mercurius" && KeuzoOptie22 == "Aarde" ||  KeuzeOptie21 == "Aarde" && KeuzoOptie22 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 91 687 870 km";
    }
    if (KeuzeOptie21 == "Mercurius" && KeuzoOptie22 == "Mars" ||  KeuzeOptie21 == "Mars" && KeuzoOptie22 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 170 026 640 km";
    }
    if (KeuzeOptie21 == "Mercurius" && KeuzoOptie22 == "Jupiter" ||  KeuzeOptie21 == "Jupiter" && KeuzoOptie22 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 720 502 010 km";
    }
    if (KeuzeOptie21 == "Mercurius" && KeuzoOptie22 == "Saturnus" ||  KeuzeOptie21 == "Saturnus" && KeuzoOptie22 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 426 725 400 km";
    }
    if (KeuzeOptie21 == "Mercurius" && KeuzoOptie22 == "Uranus" ||  KeuzeOptie21 == "Uranus" && KeuzoOptie22 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 2 813 062 200 km";
    }
    if (KeuzeOptie21 == "Mercurius" && KeuzoOptie22 == "Neptunus" ||  KeuzeOptie21 == "Neptunus" && KeuzoOptie22 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 4 440 342 900 km";
    }
    if (KeuzeOptie21 == "Mercurius" && KeuzoOptie22 == "Pluto" ||  KeuzeOptie21 == "Pluto" && KeuzoOptie22 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 4 388 090 000 km en 7 323 090 000 km";
    }

    /*Venus*/
    if (KeuzeOptie21 == "Venus" && KeuzoOptie22 == "Venus" ||  KeuzeOptie21 == "Venus" && KeuzoOptie22 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (KeuzeOptie21 == "Venus" && KeuzoOptie22 == "Aarde" ||  KeuzeOptie21 == "Aarde" && KeuzoOptie22 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 41 388 940 km";
    }
    if (KeuzeOptie21 == "Venus" && KeuzoOptie22 == "Mars" ||  KeuzeOptie21 == "Mars" && KeuzoOptie22 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 119 727 710 km";
    }
    if (KeuzeOptie21 == "Venus" && KeuzoOptie22 == "Jupiter" ||  KeuzeOptie21 == "Jupiter" && KeuzoOptie22 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 670 203 080 km";
    }
    if (KeuzeOptie21 == "Venus" && KeuzoOptie22 == "Saturnus" ||  KeuzeOptie21 == "Saturnus" && KeuzoOptie22 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 318 516 470 km";
    }
    if (KeuzeOptie21 == "Venus" && KeuzoOptie22 == "Uranus" ||  KeuzeOptie21 == "Uranus" && KeuzoOptie22 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 2 762 763 270 km";
    }
    if (KeuzeOptie21 == "Venus" && KeuzoOptie22 == "Neptunus" ||  KeuzeOptie21 == "Neptunus" && KeuzoOptie22 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 4 390 043 970 km";
    }
    if (KeuzeOptie21 == "Venus" && KeuzoOptie22 == "Pluto" ||  KeuzeOptie21 == "Pluto" && KeuzoOptie22 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 4 337 791 070 km en 7 272 791 070 km";
    }

    /*Aarde*/
    if (KeuzeOptie21 == "Aarde" && KeuzoOptie22 == "Aarde" ||  KeuzeOptie21 == "Aarde" && KeuzoOptie22 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (KeuzeOptie21 == "Aarde" && KeuzoOptie22 == "Mars" ||  KeuzeOptie21 == "Mars" && KeuzoOptie22 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 78 338 770 km";
    }
    if (KeuzeOptie21 == "Aarde" && KeuzoOptie22 == "Jupiter" ||  KeuzeOptie21 == "Jupiter" && KeuzoOptie22 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 628 814 140 km";
    }
    if (KeuzeOptie21 == "Aarde" && KeuzoOptie22 == "Saturnus" ||  KeuzeOptie21 == "Saturnus" && KeuzoOptie22 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 277 127 530 km";
    }
    if (KeuzeOptie21 == "Aarde" && KeuzoOptie22 == "Uranus" ||  KeuzeOptie21 == "Uranus" && KeuzoOptie22 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 2 721 374 330 km";
    }
    if (KeuzeOptie21 == "Aarde" && KeuzoOptie22 == "Neptunus" ||  KeuzeOptie21 == "Neptunus" && KeuzoOptie22 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 4 348 655 030 km";
    }
    if (KeuzeOptie21 == "Aarde" && KeuzoOptie22 == "Pluto" ||  KeuzeOptie21 == "Pluto" && KeuzoOptie22 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 4 296 402 130 km en 7 231 402 130 km";
    }

    /*Mars*/
    if (KeuzeOptie21 == "Mars" && KeuzoOptie22 == "Mars" ||  KeuzeOptie21 == "Mars" && KeuzoOptie22 == "Mars") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (KeuzeOptie21 == "Mars" && KeuzoOptie22 == "Jupiter" ||  KeuzeOptie21 == "Jupiter" && KeuzoOptie22 == "Mars") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 550 475 370 km";
    }
    if (KeuzeOptie21 == "Mars" && KeuzoOptie22 == "Saturnus" ||  KeuzeOptie21 == "Saturnus" && KeuzoOptie22 == "Mars") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 198 788 760 km";
    }
    if (KeuzeOptie21 == "Mars" && KeuzoOptie22 == "Uranus" ||  KeuzeOptie21 == "Uranus" && KeuzoOptie22 == "Mars") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 2 643 035 560 km";
    }
    if (KeuzeOptie21 == "Mars" && KeuzoOptie22 == "Neptunus" ||  KeuzeOptie21 == "Neptunus" && KeuzoOptie22 == "Mars") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 4 270 316 260 km";
    }
    if (KeuzeOptie21 == "Mars" && KeuzoOptie22 == "Pluto" ||  KeuzeOptie21 == "Pluto" && KeuzoOptie22 == "Mars") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 4 218 063 360 km en 7 153 063 360 km";
    }

    /*Jupiter*/
    if (KeuzeOptie21 == "Jupiter" && KeuzoOptie22 == "Jupiter" ||  KeuzeOptie21 == "Jupiter" && KeuzoOptie22 == "Jupiter") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (KeuzeOptie21 == "Jupiter" && KeuzoOptie22 == "Saturnus" ||  KeuzeOptie21 == "Saturnus" && KeuzoOptie22 == "Jupiter") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 648 313 390 km";
    }
    if (KeuzeOptie21 == "Jupiter" && KeuzoOptie22 == "Uranus" ||  KeuzeOptie21 == "Uranus" && KeuzoOptie22 == "Jupiter") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 2 092 560 190 km";
    }
    if (KeuzeOptie21 == "Jupiter" && KeuzoOptie22 == "Neptunus" ||  KeuzeOptie21 == "Neptunus" && KeuzoOptie22 == "Jupiter") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 3 719 840 890 km";
    }
    if (KeuzeOptie21 == "Jupiter" && KeuzoOptie22 == "Pluto" ||  KeuzeOptie21 == "Pluto" && KeuzoOptie22 == "Jupiter") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 3 667 587 990 km en 6 602 587 990 km";
    }

    /*Saturnus*/
    if (KeuzeOptie21 == "Saturnus" && KeuzoOptie22 == "Saturnus" ||  KeuzeOptie21 == "Saturnus" && KeuzoOptie22 == "Saturnus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (KeuzeOptie21 == "Saturnus" && KeuzoOptie22 == "Uranus" ||  KeuzeOptie21 == "Uranus" && KeuzoOptie22 == "Saturnus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 444 246 800 km";
    }
    if (KeuzeOptie21 == "Saturnus" && KeuzoOptie22 == "Neptunus" ||  KeuzeOptie21 == "Neptunus" && KeuzoOptie22 == "Saturnus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 3 071 527 500 km";
    }
    if (KeuzeOptie21 == "Saturnus" && KeuzoOptie22 == "Pluto" ||  KeuzeOptie21 == "Pluto" && KeuzoOptie22 == "Saturnus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 3 019 274 600 km en 5 954 274 600 km";
    }

    /*Uranus*/
    if (KeuzeOptie21 == "Uranus" && KeuzoOptie22 == "Uranus" ||  KeuzeOptie21 == "Uranus" && KeuzoOptie22 == "Uranus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (KeuzeOptie21 == "Uranus" && KeuzoOptie22 == "Neptunus" ||  KeuzeOptie21 == "Neptunus" && KeuzoOptie22 == "Uranus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 627 280 700 km";
    }
    if (KeuzeOptie21 == "Uranus" && KeuzoOptie22 == "Pluto" ||  KeuzeOptie21 == "Pluto" && KeuzoOptie22 == "Uranus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 1 575 027 800 km en 4 510 027 800 km";
    }

    /*Neptunus*/
    if (KeuzeOptie21 == "Neptunus" && KeuzoOptie22 == "Neptunus" ||  KeuzeOptie21 == "Neptunus" && KeuzoOptie22 == "Neptunus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (KeuzeOptie21 == "Neptunus" && KeuzoOptie22 == "Pluto" ||  KeuzeOptie21 == "Pluto" && KeuzoOptie22 == "Neptunus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 52 252 900 km en 2 882 747 100 km";
    }

    /*Pluto*/
    if (KeuzeOptie21 == "Pluto" && KeuzoOptie22 == "Pluto" ||  KeuzeOptie21 == "Pluto" && KeuzoOptie22 == "Pluto") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
}