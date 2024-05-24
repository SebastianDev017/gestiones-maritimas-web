<?php
if (isset($_POST['nombre'], $_POST['correo'], $_POST['asunto'], $_POST['telefono'], $_POST['mensaje'])) {
    $nombre = trim($_POST['nombre']);
    $email = trim($_POST['correo']);
    $asunto_msj = trim($_POST['asunto']);
    $telefono = trim($_POST['telefono']);
    $mensaje = trim($_POST['mensaje']);

    // Validación básica
    if ($nombre != '' && $email != '' && $asunto_msj != '' && $telefono != '' && $mensaje != '') {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Definir el correo de destino:
            $dest = "informes@gestionesmaritimas.com";  

            // Estas son cabeceras que se usan para evitar que el correo llegue a SPAM:
            $headers = "From: " . htmlspecialchars($nombre) . " <" . htmlspecialchars($email) . ">\r\n";  
            $headers .= "X-Mailer: PHP/" . phpversion() . "\n";
            $headers .= 'MIME-Version: 1.0' . "\n";
            $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

            // Aqui definimos el asunto y armamos el cuerpo del mensaje
            $asunto = htmlspecialchars($asunto_msj);
            $cuerpo = "Nombre: " . htmlspecialchars($nombre) . "<br>";
            $cuerpo .= "Email: " . htmlspecialchars($email) . "<br>";
            $cuerpo .= "Telefono: " . htmlspecialchars($telefono) . "<br>";
            $cuerpo .= "Mensaje: " . htmlspecialchars($mensaje);

            // Enviar el correo
            if (mail($dest, $asunto, $cuerpo, $headers)) {
                echo "<center><img src='images/contacto-exito.png' class='animated fadeInRight img-responsive'></center>";
            } else {
                echo "<center>Error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.</center>";
            }
        } else {
            echo "<center>Correo electrónico no válido. Por favor, revise y vuelva a intentarlo.</center>";
        }
    } else {
        echo "<center>Por favor, complete todos los campos.</center>";
    }
} else {
    echo "<center>Error al intentar enviar los datos, verificar espacios vacíos.</center>";
}
?>
