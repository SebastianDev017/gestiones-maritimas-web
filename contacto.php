<?php
// Guardar los datos recibidos en variables:
 if(isset($_POST['nombre'],$_POST['correo'],$_POST['asunto'],$_POST['telefono'],$_POST['mensaje'])){
  $nombre =$_POST['nombre'];
  $email = $_POST['correo'];
  $asunto_msj=$_POST['asunto'];
  $telefono =$_POST['telefono'];
  $mensaje = $_POST['mensaje'];
  
  // Definir el correo de destino:
  $dest = "Ocordova@gestionesmartimas.com";  
 
  // Estas son cabeceras que se usan para evitar que el correo llegue a SPAM:
  $headers = "From: $nombre <$email>\r\n";  
  $headers .= "X-Mailer: PHP5\n";
  $headers .= 'MIME-Version: 1.0' . "\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
 
  // Aqui definimos el asunto y armamos el cuerpo del mensaje
  $asunto = $asunto_msj;
  $cuerpo = "Nombre: ".$nombre."<br>";
  $cuerpo .= "Email: ".$email."<br>";
  $cuerpo .= "Telefono: ".$telefono."<br>";
  $cuerpo .= "Mensaje: ".$mensaje;
 
   // Esta es una pequena validación, que solo envie el correo si todas las variables tiene algo de contenido:
   if($nombre != '' && $email != '' && $telefono != '' && $mensaje != ''){
    mail($dest,$asunto,$cuerpo,$headers); //ENVIAR!
    echo "<center><img src='images/contacto-exito.png' class='animated fadeInRight  img-responsive'></center>";
    //echo "<h4 class='animated fadeInRight'><center>Su información fue enviada exitosamente</center></h4>";
    //echo "<h5 class='animated fadeInRight'><center>Grácias por contactarnos <b>$nombre</b>, pronto recibirá noticias nuestras.</center></h5>";
    echo "<br>";
    }else{
	echo "No fue posible enviar al información";
    }

    }else{
	echo "Error al intentar enviar los datos, verificar espacios vacios.";
    }
    ?>