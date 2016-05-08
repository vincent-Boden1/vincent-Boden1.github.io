/* Created by vin-c on 19/04/2016. */
$(document).ready(function(){
    /*Fade In elk element apart*/
    $('div').hide();
    $('section').hide();
    $('div').each(function(i) {
        $(this).delay(5*i).fadeIn();
    });

    function standaardkleuren() {
        $('.a').css('background-color', 'lightgreen');
        $('.b').css('background-color', 'orange');
        $('.c').css('background-color', 'yellow');
        $('.d').css('background-color', 'brown');
        $('.e').css('background-color', 'darkgreen');
        $('.f').css('background-color', '#40913D');
        $('.g').css('background-color', 'cyan');
        $('.h').css('background-color', 'blue');
        $('.i').css('background-color', 'lightsalmon');
        $('.j').css('background-color', 'purple');
    }

    /*Selecteren Niet-metalen*/
    $("#element1").hover(function(){
        $('.b, .c, .d, .e, .f, .g, .h, .i, .j').css('background-color', 'gray');
    }, function(){
        standaardkleuren()
    });
    /*Selecteren Alkalimetalen*/
    $("#element2").hover(function(){
        $('.a, .c, .d, .e, .f, .g, .h, .i, .j').css('background-color', 'gray');
    }, function(){
        standaardkleuren()
    });
    /*Selecteren Ardalkali metalen*/
    $("#element3").hover(function(){
        $('.a, .b, .d, .e, .f, .g, .h, .i, .j').css('background-color', 'gray');
    }, function(){
        standaardkleuren()
    });
    /*Selecteren Overgangsmetalen*/
    $("#element4").hover(function(){
        $('.a, .b, .c, .e, .f, .g, .h, .i, .j').css('background-color', 'gray');
    }, function(){
        standaardkleuren()
    });
    /*Selecteren Metalloïde*/
    $("#element5").hover(function(){
        $('.a, .b, .c, .d, .f, .g, .h, .i, .j').css('background-color', 'gray');
    }, function(){
        standaardkleuren()
    });
    /*Selecteren Post-transition metals*/
    $("#element6").hover(function(){
        $('.a, .b, .c, .d, .e, .g, .h, .i, .j').css('background-color', 'gray');
    }, function(){
        standaardkleuren()
    });
    /*Selecteren Halogenen*/
    $("#element7").hover(function(){
        $('.a, .b, .c, .d, .e, .f, .h, .i, .j').css('background-color', 'gray');
    }, function(){
        standaardkleuren()
    });
    /*Selecteren Edelgassen*/
    $("#element8").hover(function(){
        $('.a, .b, .c, .d, .e, .f, .g, .i, .j').css('background-color', 'gray');
    }, function(){
        standaardkleuren()
    });
    /*Selecteren Lanthaniden*/
    $("#element9").hover(function(){
        $('.a, .b, .c, .d, .e, .f, .g, .h, .j').css('background-color', 'gray');
    }, function(){
        standaardkleuren()
    });
    /*Selecteren Actiniden*/
    $("#element10").hover(function(){
        $('.a, .b, .c, .d, .e, .f, .g, .h, .i').css('background-color', 'gray');
    }, function(){
        standaardkleuren()
    });

    /*Tonen van elk element bij een hover over die bepaald Box*/
    function uitlegElementen(elem) {
        $(elem).hover(function() {
            $(elem + '-uitleg').fadeIn('fast');
        }, function() {
            $(elem + '-uitleg').fadeOut('fast');
        });
    }
    uitlegElementen('#H');
    uitlegElementen('#Li');
    uitlegElementen('#Na');
    uitlegElementen('#K');
    uitlegElementen('#Rb');
    uitlegElementen('#Cs');
    uitlegElementen('#Fr');
    uitlegElementen('#Be');
    uitlegElementen('#Mg');
    uitlegElementen('#Ca');
    uitlegElementen('#Sr');
    uitlegElementen('#Ba');
    uitlegElementen('#Ra');
    uitlegElementen('#Sc');
    uitlegElementen('#Y');
    uitlegElementen('#Ti');
    uitlegElementen('#Zr');
    uitlegElementen('#Hf');
    uitlegElementen('#Rf');
    uitlegElementen('#V');
    uitlegElementen('#Nb');
    uitlegElementen('#Ta');
    uitlegElementen('#Db');
    uitlegElementen('#Cr');
    uitlegElementen('#Mo');
    uitlegElementen('#W');
    uitlegElementen('#Sg');
    uitlegElementen('#Mn');
    uitlegElementen('#Tc');
    uitlegElementen('#Re');
    uitlegElementen('#Bh');
    uitlegElementen('#Fe');
    uitlegElementen('#Ru');
    uitlegElementen('#Os');
    uitlegElementen('#Hs');
    uitlegElementen('#Co');
    uitlegElementen('#Rh');
    uitlegElementen('#Ir');
    uitlegElementen('#Mt');
    uitlegElementen('#Ni');
    uitlegElementen('#Pd');
    uitlegElementen('#Pt');
    uitlegElementen('#Ds');
    uitlegElementen('#Cu');
    uitlegElementen('#Ag');
    uitlegElementen('#Au');
    uitlegElementen('#Rg');
    uitlegElementen('#Zn');
    uitlegElementen('#Cd');
    uitlegElementen('#Hg');
    uitlegElementen('#Cn');
    uitlegElementen('#B');
    uitlegElementen('#Al');
    uitlegElementen('#Ga');
    uitlegElementen('#In');
    uitlegElementen('#Tl');
    uitlegElementen('#Uut');
    uitlegElementen('#C');
    uitlegElementen('#Si');
    uitlegElementen('#Ge');
    uitlegElementen('#Sn');
    uitlegElementen('#Pb');
    uitlegElementen('#Fl');
    uitlegElementen('#N');
    uitlegElementen('#P');
    uitlegElementen('#As');
    uitlegElementen('#Sb');
    uitlegElementen('#Bi');
    uitlegElementen('#Uup');
    uitlegElementen('#O');
    uitlegElementen('#S');
    uitlegElementen('#Se');
    uitlegElementen('#Te');
    uitlegElementen('#Po');
    uitlegElementen('#Lv');
    uitlegElementen('#F');
    uitlegElementen('#Cl');
    uitlegElementen('#Br');
    uitlegElementen('#I');
    uitlegElementen('#At');
    uitlegElementen('#Uus');
    uitlegElementen('#He');
    uitlegElementen('#Ne');
    uitlegElementen('#Ar');
    uitlegElementen('#Kr');
    uitlegElementen('#Xe');
    uitlegElementen('#Rn');
    uitlegElementen('#Uuo');
    uitlegElementen('#La');
    uitlegElementen('#Ac');
    uitlegElementen('#Ce');
    uitlegElementen('#Th');
    uitlegElementen('#Pr');
    uitlegElementen('#Pa');
    uitlegElementen('#Nd');
    uitlegElementen('#U');
    uitlegElementen('#Pm');
    uitlegElementen('#Np');
    uitlegElementen('#Sm');
    uitlegElementen('#Pu');
    uitlegElementen('#Eu');
    uitlegElementen('#Am');
    uitlegElementen('#Gd');
    uitlegElementen('#Cm');
    uitlegElementen('#Tb');
    uitlegElementen('#Bk');
    uitlegElementen('#Dy');
    uitlegElementen('#Cf');
    uitlegElementen('#Ho');
    uitlegElementen('#Es');
    uitlegElementen('#Er');
    uitlegElementen('#Fm');
    uitlegElementen('#Tm');
    uitlegElementen('#Md');
    uitlegElementen('#Yb');
    uitlegElementen('#No');
    uitlegElementen('#Lu');
    uitlegElementen('#Lr');
});