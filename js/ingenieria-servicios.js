$(document).ready(function(){
	$("#_ingenieria").show();
    $("#_localizacion").hide();
    $("#_documentacion").hide();
    $("#_valvulas").hide();
    $("#_pnd").hide();
    $("#_soldadura").hide();
    $("#_torno").hide();



    $(".subitem1").click(function(){ //qhse
        $(".subitem1").addClass("_menu-active");
        }, function(){
        $(".subitem1").removeClass("_menu-active");
    $("#_ingenieria").show();
    $("#_localizacion").hide();
    $("#_documentacion").hide();
    $("#_valvulas").hide();
    $("#_pnd").hide();
    $("#_soldadura").hide();
    $("#_torno").hide();
     
    });

    $(".subitem2").click(function(){ // estabilidad
    $("#_ingenieria").hide();
    $("#_localizacion").show();
    $("#_documentacion").hide();
    $("#_valvulas").hide();
    $("#_pnd").hide();
    $("#_soldadura").hide();
    $("#_torno").hide();
    });

    $(".subitem3").click(function(){ // pbip
    $("#_ingenieria").hide();
    $("#_localizacion").hide();
    $("#_documentacion").show();
    $("#_valvulas").hide();
    $("#_pnd").hide();
    $("#_soldadura").hide();
    $("#_torno").hide();
    });

    $(".subitem4").click(function(){ // Mecanica ism
    $("#_ingenieria").hide();
    $("#_localizacion").hide();
    $("#_documentacion").hide();
    $("#_valvulas").show();
    $("#_pnd").hide();
    $("#_soldadura").hide();
    $("#_torno").hide();
    });

    $(".subitem5").click(function(){ // Seguridad y salud en el trabajo
    $("#_ingenieria").hide();
    $("#_localizacion").hide();
    $("#_documentacion").hide();
    $("#_valvulas").hide();
    $("#_pnd").show();
    $("#_soldadura").hide();
    $("#_torno").hide();
    });

    $(".subitem6").click(function(){ // analisis causa raiz
    $("#_ingenieria").hide();
    $("#_localizacion").hide();
    $("#_documentacion").hide();
    $("#_valvulas").hide();
    $("#_pnd").hide();
    $("#_soldadura").show();
    $("#_torno").hide();
    });


    $(".subitem7").click(function(){ // analisis causa raiz
    $("#_ingenieria").hide();
    $("#_localizacion").hide();
    $("#_documentacion").hide();
    $("#_valvulas").hide();
    $("#_pnd").hide();
    $("#_soldadura").hide();
    $("#_torno").show();
    });

	});

