/* Created by vin-c on 17/04/2016. */
function myFunction1() {
    var x1 = document.getElementById("planeten1").value;
    document.getElementById("planeet1").innerHTML = x1;
    var x2 = document.getElementById("planeten2").value;

    /*Afbeeldingen*/
    if (x1 == "Zon") {
        var img1 = new Image();
        var div1 = document.getElementById('planeet1');
        img1.onload = function() {
            div1.innerHTML += '<img src="'+img1.src+'" />';
        };
        img1.src = '../images/zon.jpg';
    }
    if (x1 == "Mercurius") {
        var img2 = new Image();
        var div2 = document.getElementById('planeet1');
        img2.onload = function() {
            div2.innerHTML += '<img src="'+img2.src+'" />';
        };
        img2.src = '../images/mercurius.jpg';
    }
    if (x1 == "Venus") {
        var img3 = new Image();
        var div3 = document.getElementById('planeet1');
        img3.onload = function() {
            div3.innerHTML += '<img src="'+img3.src+'" />';
        };
        img3.src = '../images/venus.jpg';
    }
    if (x1 == "Aarde") {
        var img4 = new Image();
        var div4 = document.getElementById('planeet1');
        img4.onload = function() {
            div4.innerHTML += '<img src="'+img4.src+'" />';
        };
        img4.src = '../images/aarde.jpg';
    }
    if (x1 == "Mars") {
        var img5 = new Image();
        var div5 = document.getElementById('planeet1');
        img5.onload = function() {
            div5.innerHTML += '<img src="'+img5.src+'" />';
        };
        img5.src = '../images/mars.jpg';
    }
    if (x1 == "Jupiter") {
        var img6 = new Image();
        var div6 = document.getElementById('planeet1');
        img6.onload = function() {
            div6.innerHTML += '<img src="'+img6.src+'" />';
        };
        img6.src = '../images/jupiter.jpg';
    }
    if (x1 == "Saturnus") {
        var img7 = new Image();
        var div7 = document.getElementById('planeet1');
        img7.onload = function() {
            div7.innerHTML += '<img src="'+img7.src+'" />';
        };
        img7.src = '../images/saturnus.jpg';
    }
    if (x1 == "Uranus") {
        var img8 = new Image();
        var div8 = document.getElementById('planeet1');
        img8.onload = function() {
            div8.innerHTML += '<img src="'+img8.src+'" />';
        };
        img8.src = '../images/uranus.jpg';
    }
    if (x1 == "Neptunus") {
        var img9 = new Image();
        var div9 = document.getElementById('planeet1');
        img9.onload = function() {
            div9.innerHTML += '<img src="'+img9.src+'" />';
        };
        img9.src = '../images/neptunus.jpg';
    }
    if (x1 == "Pluto") {
        var img10 = new Image();
        var div10 = document.getElementById('planeet1');
        img10.onload = function() {
            div10.innerHTML += '<img src="'+img10.src+'" />';
        };
        img10.src = '../images/pluto.jpg';
    }

    /*Zon*/
    if (x1 == "Zon" && x2 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (x1 == "Zon" && x2 == "Mercurius" ||  x1 == "Mercurius" && x2 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 57 910 000 km";
    }
    if (x1 == "Zon" && x2 == "Venus" ||  x1 == "Venus" && x2 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 108 208 930 km";
    }
    if (x1 == "Zon" && x2 == "Aarde" ||  x1 == "Aarde" && x2 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 149 597 870 km";
    }
    if (x1 == "Zon" && x2 == "Mars" ||  x1 == "Mars" && x2 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 227 936 640 km";
    }
    if (x1 == "Zon" && x2 == "Jupiter" ||  x1 == "Jupiter" && x2 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 778 412 010 km";
    }
    if (x1 == "Zon" && x2 == "Saturnus" ||  x1 == "Saturnus" && x2 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 426 725 400 km";
    }
    if (x1 == "Zon" && x2 == "Uranus" ||  x1 == "Uranus" && x2 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 2 870 972 200 km";
    }
    if (x1 == "Zon" && x2 == "Neptunus" ||  x1 == "Neptunus" && x2 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 4 498 252 900 km";
    }
    if (x1 == "Zon" && x2 == "Pluto" ||  x1 == "Pluto" && x2 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 4 446 000 000 km en 7 381 000 000 km";
    }

    /*Mercurius*/
    if (x1 == "Mercurius" && x2 == "Mercurius" ||  x1 == "Mercurius" && x2 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (x1 == "Mercurius" && x2 == "Venus" ||  x1 == "Venus" && x2 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 50 298 930 km";
    }
    if (x1 == "Mercurius" && x2 == "Aarde" ||  x1 == "Aarde" && x2 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 91 687 870 km";
    }
    if (x1 == "Mercurius" && x2 == "Mars" ||  x1 == "Mars" && x2 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 170 026 640 km";
    }
    if (x1 == "Mercurius" && x2 == "Jupiter" ||  x1 == "Jupiter" && x2 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 720 502 010 km";
    }
    if (x1 == "Mercurius" && x2 == "Saturnus" ||  x1 == "Saturnus" && x2 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 426 725 400 km";
    }
    if (x1 == "Mercurius" && x2 == "Uranus" ||  x1 == "Uranus" && x2 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 2 813 062 200 km";
    }
    if (x1 == "Mercurius" && x2 == "Neptunus" ||  x1 == "Neptunus" && x2 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 4 440 342 900 km";
    }
    if (x1 == "Mercurius" && x2 == "Pluto" ||  x1 == "Pluto" && x2 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 4 388 090 000 km en 7 323 090 000 km";
    }

    /*Venus*/
    if (x1 == "Venus" && x2 == "Venus" ||  x1 == "Venus" && x2 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (x1 == "Venus" && x2 == "Aarde" ||  x1 == "Aarde" && x2 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 41 388 940 km";
    }
    if (x1 == "Venus" && x2 == "Mars" ||  x1 == "Mars" && x2 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 119 727 710 km";
    }
    if (x1 == "Venus" && x2 == "Jupiter" ||  x1 == "Jupiter" && x2 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 670 203 080 km";
    }
    if (x1 == "Venus" && x2 == "Saturnus" ||  x1 == "Saturnus" && x2 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 318 516 470 km";
    }
    if (x1 == "Venus" && x2 == "Uranus" ||  x1 == "Uranus" && x2 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 2 762 763 270 km";
    }
    if (x1 == "Venus" && x2 == "Neptunus" ||  x1 == "Neptunus" && x2 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 4 390 043 970 km";
    }
    if (x1 == "Venus" && x2 == "Pluto" ||  x1 == "Pluto" && x2 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 4 337 791 070 km en 7 272 791 070 km";
    }

    /*Aarde*/
    if (x1 == "Aarde" && x2 == "Aarde" ||  x1 == "Aarde" && x2 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (x1 == "Aarde" && x2 == "Mars" ||  x1 == "Mars" && x2 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 78 338 770 km";
    }
    if (x1 == "Aarde" && x2 == "Jupiter" ||  x1 == "Jupiter" && x2 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 628 814 140 km";
    }
    if (x1 == "Aarde" && x2 == "Saturnus" ||  x1 == "Saturnus" && x2 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 277 127 530 km";
    }
    if (x1 == "Aarde" && x2 == "Uranus" ||  x1 == "Uranus" && x2 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 2 721 374 330 km";
    }
    if (x1 == "Aarde" && x2 == "Neptunus" ||  x1 == "Neptunus" && x2 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 4 348 655 030 km";
    }
    if (x1 == "Aarde" && x2 == "Pluto" ||  x1 == "Pluto" && x2 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 4 296 402 130 km en 7 231 402 130 km";
    }

    /*Mars*/
    if (x1 == "Mars" && x2 == "Mars" ||  x1 == "Mars" && x2 == "Mars") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (x1 == "Mars" && x2 == "Jupiter" ||  x1 == "Jupiter" && x2 == "Mars") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 550 475 370 km";
    }
    if (x1 == "Mars" && x2 == "Saturnus" ||  x1 == "Saturnus" && x2 == "Mars") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 198 788 760 km";
    }
    if (x1 == "Mars" && x2 == "Uranus" ||  x1 == "Uranus" && x2 == "Mars") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 2 643 035 560 km";
    }
    if (x1 == "Mars" && x2 == "Neptunus" ||  x1 == "Neptunus" && x2 == "Mars") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 4 270 316 260 km";
    }
    if (x1 == "Mars" && x2 == "Pluto" ||  x1 == "Pluto" && x2 == "Mars") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 4 218 063 360 km en 7 153 063 360 km";
    }

    /*Jupiter*/
    if (x1 == "Jupiter" && x2 == "Jupiter" ||  x1 == "Jupiter" && x2 == "Jupiter") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (x1 == "Jupiter" && x2 == "Saturnus" ||  x1 == "Saturnus" && x2 == "Jupiter") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 648 313 390 km";
    }
    if (x1 == "Jupiter" && x2 == "Uranus" ||  x1 == "Uranus" && x2 == "Jupiter") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 2 092 560 190 km";
    }
    if (x1 == "Jupiter" && x2 == "Neptunus" ||  x1 == "Neptunus" && x2 == "Jupiter") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 3 719 840 890 km";
    }
    if (x1 == "Jupiter" && x2 == "Pluto" ||  x1 == "Pluto" && x2 == "Jupiter") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 3 667 587 990 km en 6 602 587 990 km";
    }

    /*Saturnus*/
    if (x1 == "Saturnus" && x2 == "Saturnus" ||  x1 == "Saturnus" && x2 == "Saturnus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (x1 == "Saturnus" && x2 == "Uranus" ||  x1 == "Uranus" && x2 == "Saturnus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 444 246 800 km";
    }
    if (x1 == "Saturnus" && x2 == "Neptunus" ||  x1 == "Neptunus" && x2 == "Saturnus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 3 071 527 500 km";
    }
    if (x1 == "Saturnus" && x2 == "Pluto" ||  x1 == "Pluto" && x2 == "Saturnus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 3 019 274 600 km en 5 954 274 600 km";
    }

    /*Uranus*/
    if (x1 == "Uranus" && x2 == "Uranus" ||  x1 == "Uranus" && x2 == "Uranus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (x1 == "Uranus" && x2 == "Neptunus" ||  x1 == "Neptunus" && x2 == "Uranus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 627 280 700 km";
    }
    if (x1 == "Uranus" && x2 == "Pluto" ||  x1 == "Pluto" && x2 == "Uranus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 1 575 027 800 km en 4 510 027 800 km";
    }

    /*Neptunus*/
    if (x1 == "Neptunus" && x2 == "Neptunus" ||  x1 == "Neptunus" && x2 == "Neptunus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (x1 == "Neptunus" && x2 == "Pluto" ||  x1 == "Pluto" && x2 == "Neptunus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 52 252 900 km en 2 882 747 100 km";
    }

    /*Pluto*/
    if (x1 == "Pluto" && x2 == "Pluto" ||  x1 == "Pluto" && x2 == "Pluto") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
}

function myFunction2() {
    var y1 = document.getElementById("planeten2").value;
    document.getElementById("planeet2").innerHTML = y1;

    var y2 = document.getElementById("planeten1").value;

    /*Afbeeldingen*/
    if (y1 == "Zon") {
        var img1 = new Image();
        var div1 = document.getElementById('planeet2');
        img1.onload = function() {
            div1.innerHTML += '<img src="'+img1.src+'" />';
        };
        img1.src = '../images/zon.jpg';
    }
    if (y1 == "Mercurius") {
        var img2 = new Image();
        var div2 = document.getElementById('planeet2');
        img2.onload = function() {
            div2.innerHTML += '<img src="'+img2.src+'" />';
        };
        img2.src = '../images/mercurius.jpg';
    }
    if (y1 == "Venus") {
        var img3 = new Image();
        var div3 = document.getElementById('planeet2');
        img3.onload = function() {
            div3.innerHTML += '<img src="'+img3.src+'" />';
        };
        img3.src = '../images/venus.jpg';
    }
    if (y1 == "Aarde") {
        var img4 = new Image();
        var div4 = document.getElementById('planeet2');
        img4.onload = function() {
            div4.innerHTML += '<img src="'+img4.src+'" />';
        };
        img4.src = '../images/aarde.jpg';
    }
    if (y1 == "Mars") {
        var img5 = new Image();
        var div5 = document.getElementById('planeet2');
        img5.onload = function() {
            div5.innerHTML += '<img src="'+img5.src+'" />';
        };
        img5.src = '../images/mars.jpg';
    }
    if (y1 == "Jupiter") {
        var img6 = new Image();
        var div6 = document.getElementById('planeet2');
        img6.onload = function() {
            div6.innerHTML += '<img src="'+img6.src+'" />';
        };
        img6.src = '../images/jupiter.jpg';
    }
    if (y1 == "Saturnus") {
        var img7 = new Image();
        var div7 = document.getElementById('planeet2');
        img7.onload = function() {
            div7.innerHTML += '<img src="'+img7.src+'" />';
        };
        img7.src = '../images/saturnus.jpg';
    }
    if (y1 == "Uranus") {
        var img8 = new Image();
        var div8 = document.getElementById('planeet2');
        img8.onload = function() {
            div8.innerHTML += '<img src="'+img8.src+'" />';
        };
        img8.src = '../images/uranus.jpg';
    }
    if (y1 == "Neptunus") {
        var img9 = new Image();
        var div9 = document.getElementById('planeet2');
        img9.onload = function() {
            div9.innerHTML += '<img src="'+img9.src+'" />';
        };
        img9.src = '../images/neptunus.jpg';
    }
    if (y1 == "Pluto") {
        var img10 = new Image();
        var div10 = document.getElementById('planeet2');
        img10.onload = function() {
            div10.innerHTML += '<img src="'+img10.src+'" />';
        };
        img10.src = '../images/pluto.jpg';
    }

    /*Zon*/
    if (y1 == "Zon" && y2 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (y1 == "Zon" && y2 == "Mercurius" ||  y1 == "Mercurius" && y2 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 57 910 000 km";
    }
    if (y1 == "Zon" && y2 == "Venus" ||  y1 == "Venus" && y2 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 108 208 930 km";
    }
    if (y1 == "Zon" && y2 == "Aarde" ||  y1 == "Aarde" && y2 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 149 597 870 km";
    }
    if (y1 == "Zon" && y2 == "Mars" ||  y1 == "Mars" && y2 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 227 936 640 km";
    }
    if (y1 == "Zon" && y2 == "Jupiter" ||  y1 == "Jupiter" && y2 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 778 412 010 km";
    }
    if (y1 == "Zon" && y2 == "Saturnus" ||  y1 == "Saturnus" && y2 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 426 725 400 km";
    }
    if (y1 == "Zon" && y2 == "Uranus" ||  y1 == "Uranus" && y2 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 2 870 972 200 km";
    }
    if (y1 == "Zon" && y2 == "Neptunus" ||  y1 == "Neptunus" && y2 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 4 498 252 900 km";
    }
    if (y1 == "Zon" && y2 == "Pluto" ||  y1 == "Pluto" && y2 == "Zon") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 4 446 000 000 km en 7 381 000 000 km";
    }

    /*Mercurius*/
    if (y1 == "Mercurius" && y2 == "Mercurius" ||  y1 == "Mercurius" && y2 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (y1 == "Mercurius" && y2 == "Venus" ||  y1 == "Venus" && y2 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 50 298 930 km";
    }
    if (y1 == "Mercurius" && y2 == "Aarde" ||  y1 == "Aarde" && y2 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 91 687 870 km";
    }
    if (y1 == "Mercurius" && y2 == "Mars" ||  y1 == "Mars" && y2 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 170 026 640 km";
    }
    if (y1 == "Mercurius" && y2 == "Jupiter" ||  y1 == "Jupiter" && y2 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 720 502 010 km";
    }
    if (y1 == "Mercurius" && y2 == "Saturnus" ||  y1 == "Saturnus" && y2 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 426 725 400 km";
    }
    if (y1 == "Mercurius" && y2 == "Uranus" ||  y1 == "Uranus" && y2 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 2 813 062 200 km";
    }
    if (y1 == "Mercurius" && y2 == "Neptunus" ||  y1 == "Neptunus" && y2 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 4 440 342 900 km";
    }
    if (y1 == "Mercurius" && y2 == "Pluto" ||  y1 == "Pluto" && y2 == "Mercurius") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 4 388 090 000 km en 7 323 090 000 km";
    }

    /*Venus*/
    if (y1 == "Venus" && y2 == "Venus" ||  y1 == "Venus" && y2 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (y1 == "Venus" && y2 == "Aarde" ||  y1 == "Aarde" && y2 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 41 388 940 km";
    }
    if (y1 == "Venus" && y2 == "Mars" ||  y1 == "Mars" && y2 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 119 727 710 km";
    }
    if (y1 == "Venus" && y2 == "Jupiter" ||  y1 == "Jupiter" && y2 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 670 203 080 km";
    }
    if (y1 == "Venus" && y2 == "Saturnus" ||  y1 == "Saturnus" && y2 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 318 516 470 km";
    }
    if (y1 == "Venus" && y2 == "Uranus" ||  y1 == "Uranus" && y2 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 2 762 763 270 km";
    }
    if (y1 == "Venus" && y2 == "Neptunus" ||  y1 == "Neptunus" && y2 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 4 390 043 970 km";
    }
    if (y1 == "Venus" && y2 == "Pluto" ||  y1 == "Pluto" && y2 == "Venus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 4 337 791 070 km en 7 272 791 070 km";
    }

    /*Aarde*/
    if (y1 == "Aarde" && y2 == "Aarde" ||  y1 == "Aarde" && y2 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (y1 == "Aarde" && y2 == "Mars" ||  y1 == "Mars" && y2 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 78 338 770 km";
    }
    if (y1 == "Aarde" && y2 == "Jupiter" ||  y1 == "Jupiter" && y2 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 628 814 140 km";
    }
    if (y1 == "Aarde" && y2 == "Saturnus" ||  y1 == "Saturnus" && y2 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 277 127 530 km";
    }
    if (y1 == "Aarde" && y2 == "Uranus" ||  y1 == "Uranus" && y2 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 2 721 374 330 km";
    }
    if (y1 == "Aarde" && y2 == "Neptunus" ||  y1 == "Neptunus" && y2 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 4 348 655 030 km";
    }
    if (y1 == "Aarde" && y2 == "Pluto" ||  y1 == "Pluto" && y2 == "Aarde") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 4 296 402 130 km en 7 231 402 130 km";
    }

    /*Mars*/
    if (y1 == "Mars" && y2 == "Mars" ||  y1 == "Mars" && y2 == "Mars") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (y1 == "Mars" && y2 == "Jupiter" ||  y1 == "Jupiter" && y2 == "Mars") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 550 475 370 km";
    }
    if (y1 == "Mars" && y2 == "Saturnus" ||  y1 == "Saturnus" && y2 == "Mars") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 198 788 760 km";
    }
    if (y1 == "Mars" && y2 == "Uranus" ||  y1 == "Uranus" && y2 == "Mars") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 2 643 035 560 km";
    }
    if (y1 == "Mars" && y2 == "Neptunus" ||  y1 == "Neptunus" && y2 == "Mars") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 4 270 316 260 km";
    }
    if (y1 == "Mars" && y2 == "Pluto" ||  y1 == "Pluto" && y2 == "Mars") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 4 218 063 360 km en 7 153 063 360 km";
    }

    /*Jupiter*/
    if (y1 == "Jupiter" && y2 == "Jupiter" ||  y1 == "Jupiter" && y2 == "Jupiter") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (y1 == "Jupiter" && y2 == "Saturnus" ||  y1 == "Saturnus" && y2 == "Jupiter") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 648 313 390 km";
    }
    if (y1 == "Jupiter" && y2 == "Uranus" ||  y1 == "Uranus" && y2 == "Jupiter") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 2 092 560 190 km";
    }
    if (y1 == "Jupiter" && y2 == "Neptunus" ||  y1 == "Neptunus" && y2 == "Jupiter") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 3 719 840 890 km";
    }
    if (y1 == "Jupiter" && y2 == "Pluto" ||  y1 == "Pluto" && y2 == "Jupiter") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 3 667 587 990 km en 6 602 587 990 km";
    }

    /*Saturnus*/
    if (y1 == "Saturnus" && y2 == "Saturnus" ||  y1 == "Saturnus" && y2 == "Saturnus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (y1 == "Saturnus" && y2 == "Uranus" ||  y1 == "Uranus" && y2 == "Saturnus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 444 246 800 km";
    }
    if (y1 == "Saturnus" && y2 == "Neptunus" ||  y1 == "Neptunus" && y2 == "Saturnus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 3 071 527 500 km";
    }
    if (y1 == "Saturnus" && y2 == "Pluto" ||  y1 == "Pluto" && y2 == "Saturnus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 3 019 274 600 km en 5 954 274 600 km";
    }

    /*Uranus*/
    if (y1 == "Uranus" && y2 == "Uranus" ||  y1 == "Uranus" && y2 == "Uranus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (y1 == "Uranus" && y2 == "Neptunus" ||  y1 == "Neptunus" && y2 == "Uranus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 1 627 280 700 km";
    }
    if (y1 == "Uranus" && y2 == "Pluto" ||  y1 == "Pluto" && y2 == "Uranus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 1 575 027 800 km en 4 510 027 800 km";
    }

    /*Neptunus*/
    if (y1 == "Neptunus" && y2 == "Neptunus" ||  y1 == "Neptunus" && y2 == "Neptunus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
    if (y1 == "Neptunus" && y2 == "Pluto" ||  y1 == "Pluto" && y2 == "Neptunus") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: tussen de 52 252 900 km en 2 882 747 100 km";
    }

    /*Pluto*/
    if (y1 == "Pluto" && y2 == "Pluto" ||  y1 == "Pluto" && y2 == "Pluto") {
        document.getElementById("afstand").innerHTML = "Afstand tussen de twee wanneer ze op een rechte lijn zouden liggen t.o.v. de zon: 0 km";
    }
}