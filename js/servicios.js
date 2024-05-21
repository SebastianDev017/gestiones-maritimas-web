$(document).ready(function(){
	$("#_cursos").show();
	$("#_objetivo").show();
    $("#_qhse").hide();
    $("#_estabilidad").hide();
    $("#_pbip").hide();
    $("#_ism").hide();
    $("#_sptrs").hide();
    $("#_raiz").hide();

    

    $(".subitem0").click(function(){ // Todos los servicios%
    $("#_cursos").show();
    $("#_objetivo").show();
    $("#_qhse").hide();
    $("#_estabilidad").hide();
    $("#_pbip").hide();
    $("#_ism").hide();
    $("#_sptrs").hide();
    $("#_raiz").hide();
     });


    $(".subitem1").click(function(){ //qhse
    $("#_cursos").hide();
    $("#_objetivo").hide();
    $("#_qhse").show();
    $("#_estabilidad").hide();
    $("#_pbip").hide();
    $("#_ism").hide();
    $("#_sptrs").hide();
    $("#_raiz").hide();
     });

    $(".subitem2").click(function(){ // estabilidad
    $("#_cursos").hide();
    $("#_objetivo").hide();
    $("#_qhse").hide();
    $("#_estabilidad").show();
    $("#_pbip").hide();
    $("#_ism").hide();
    $("#_sptrs").hide();
    $("#_raiz").hide();
     });

    $(".subitem3").click(function(){ // pbip
    $("#_cursos").hide();
    $("#_objetivo").hide();
    $("#_qhse").hide();
    $("#_estabilidad").hide();
    $("#_pbip").show();
    $("#_ism").hide();
    $("#_sptrs").hide();
    $("#_raiz").hide();
     });

    $(".subitem4").click(function(){ // Mecanica ism
    $("#_cursos").hide();
    $("#_objetivo").hide();
    $("#_objetivo").hide();
    $("#_qhse").hide();
    $("#_estabilidad").hide();
    $("#_pbip").hide();
    $("#_ism").show();
    $("#_sptrs").hide();
    $("#_raiz").hide();
     });

    $(".subitem5").click(function(){ // Seguridad y salud en el trabajo
    $("#_cursos").hide();
    $("#_objetivo").hide();
    $("#_qhse").hide();
    $("#_estabilidad").hide();
    $("#_pbip").hide();
    $("#_ism").hide();
    $("#_sptrs").show();
    $("#_raiz").hide();
     });

    $(".subitem6").click(function(){ // analisis causa raiz
    $("#_cursos").hide();
    $("#_objetivo").hide();
    $("#_qhse").hide();
    $("#_estabilidad").hide();
    $("#_pbip").hide();
    $("#_ism").hide();
    $("#_sptrs").hide();
    $("#_raiz").show();
     });

	});

