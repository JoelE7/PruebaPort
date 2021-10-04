
<?php
if(isset($_POST["enviar"])){
    if(!empty($_POST["name"])
    &&!empty($_POST["subject"])
    &&!empty($_POST["email"])
    &&!empty($_POST["message"]))

    $nombre = $_POST["name"];
    $asunto = $_POST["subject"];
    $email = $_POST["email"];
    $mensaje = $_POST["message"];

    $header = "From: noreply@example.com" . "\r\n";
    $header.="Reply-To: noreply@example.com" . "\r\n";
    $header.= "X-Mailer:PHP/" . phpversion();
    $mail = @mail($email,$asunto,$mensaje,$header);

    if($mail){
        echo "<h4>Mensaje enviado con exito</h4>";
    }else{
        echo "fallo";
    }
}

?>