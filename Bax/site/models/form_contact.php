<?php
header("Access-Control-Allow-Origin:*");
header("Content-type: application/json");
error_reporting(0);

if(isset($_POST)){
    $fullName = isset($_POST['fullname']) && !ctype_space($_POST['fullname']) ? $_POST['fullname'] : null;
    $email = isset($_POST['email']) && !ctype_space($_POST['email']) ? $_POST['email'] : null;
    $message = isset($_POST['message']) && !ctype_space($_POST['message']) ? $_POST['message'] : null;
    
    $response = array();
    
    array_push($response, $fullName, $email, $message);
    
    validateNull($response);
}

function validateNull($array){
    $count = 0;
    foreach($array as $value){
        if($value != null){
            $count++;
        }
    }
    
    if($count >= 3){
        validations($array);
    }else{
        $res = [
            "sendData" => false,
            "message"=> "Llena todos los campos"
        ];
        echo json_encode($res);
    }
}

function validations($array){
    $error = array();

    foreach($array as $key => $value){
        if($key == 0){
            $error['Nombre completo'] = validateName($value);
        }
        if($key == 1){
            $error['E-mail'] = validateEmail($value);
        }
        if($key == 2){
            $error['Mensaje'] = validateMensaje($value);
        }
    }
    canSendMail($error , $array);
}

function validateName($name){
    if(!preg_match("/^[ a-zA-ZÑñáéíóúÁÉÍÓÚ ]+$/", $name)){
        return "El nombre solo debe contener letras";
    }else{
        return "Datos Correctos";
    }
}

function validateEmail($email){
    if(!preg_match("/^[A-Za-z0-9.-_]+@[A-Za-z]+\.[A-Za-z]+$/", $email)){
        return "Ingrese un correo válido";
    }else{
        return "Datos Correctos";
    }
}

function validateMensaje($message){
    if(!preg_match("/^[ a-zA-ZÑñáéíóúÁÉÍÓÚ -,-;:_.?¿¡! ]+$/", $message)){
        return "Solo ingrese el mensaje que deba ingresar, no es necesario agregar números o caracteres especiales";
    }else{
        return "Datos Correctos";
    }
}


function canSendMail($error, $values){
    $count = 0;
    foreach($error as $value){
        if($value == "Datos Correctos"){
            $count++;
        }
    }
    
    if($count >= 3){
        sendMail($values);
    }else{
        $res = [
            "sendData" => false,
            "message"=> $error
        ];
        echo json_encode($res);
    }
}

function sendMail($values){
    $to = "hseduardo98@gmail.com";
    $subject = "Nuevos datos enviados del formulario de contacto BAX";
    $domain = $_SERVER["HTTP_HOST"];
    global $fullName;
    global $email;
    global $message;
    
    foreach($values as $key => $value){
        if($key == 0){
            $fullName = $value;
        }
        if($key == 1){
            $email = $value;
        }
        if($key == 2){
            $message = $value;
        }
    }

    $msg = "
        <ul>
            <li>Nombre: <b>$fullName</b></li>
            <li>Correo: <b>$email</b></li>
            <li>Mensaje: <b>$message</b></li>
        </ul>
        ";

    $headers = "MIME-Version: 1.0\r\n" . "Content-Type: text/html;charset=utf-8\r\n" . "From: Envío Automático No Responder <no-reply@$domain>";
    $send_mail = mail($to, $subject, $msg, $headers);

    if($send_mail){
        $res = [
            "sendData" => true,
            "message"=> "Los datos fueron enviados correctamente"
        ];
        echo json_encode($res);
    }else{
        $res = [
            "sendData" => false,
            "message"=> "Hubo un problema el enviar tus datos, intente nuevamente"
        ];
        echo json_encode($res);
    }
}
?>