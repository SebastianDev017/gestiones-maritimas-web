function email_contacto(){    //declarando funcion 
	var nombre=document.getElementById("nombre").value  //obtendio variables
	var correo=document.getElementById("correo").value
	var asunto=document.getElementById("asunto").value
	var telefono=document.getElementById("telefono").value
	var mensaje=document.getElementById("mensaje").value
	var validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/; 
      if (nombre== "") {
			$("input#nombre").focus();
			return false;
		}
		 if (correo== "" || (!validacion_email.test(correo))) {
			$("input#correo").focus();
			 $("#correo").addClass("error_validacion_campos");
			if (!validacion_email.test(correo)){
			
			}
			return false;
		}
		if(asunto==""){
			$("input#asunto").focus();
			return false;
		}
         if (telefono== "") {
			$("input#telefono").focus();
			return false;
		}
           if (mensaje== "") {
			$("textarea#mensaje").focus();
			return false;
		}

    var url="contacto.php";
    $.ajax({
    type:"post",
    url:url,
    data:{nombre:nombre,correo:correo,asunto:asunto,telefono:telefono,mensaje:mensaje},
    success:function(datos){
    	$("#verdatos").html(datos);
    }

})

}