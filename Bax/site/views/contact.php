<!DOCTYPE html>
<html lang="en">
<head>
    <?php require_once("header.php")?>
    <title>Contacta con nosotros</title>
</head>
<body>
<?php require_once("nav.php")?>
<section>
    <div class="container">
        <img src="../assets/img/couple-entrepreneurs.jpg" alt="couple entrepreneurs">
        <div>
            <form action="">
                <label for="fullname">Nombre y apellido:</label>
                <input type="text" name="fullname" id="fullname">
                <label for="email">E-mail:</label>
                <input type="text" name="email" id="email">
                <label for="message">Tu mensaje</label>
                <input type="text" name="message" id="message">
                <button type="submit">Enviar</button>
            </form>
        </div>
    </div>
    <div>
        <h1>Otros canales de comunicación</h1>
        <div class="channels">
            <div class="channel__type">
                <img src="../assets/img/channel-phone.png" alt="channel phone">
                <p>(+52) 22-2365- 8547</p>
            </div>
            <div class="channel__type">
                <img src="../assets/img/channel-email.png" alt="channel email">
                <p>E-mail:</p>
                <p>baxsoluciones@escueladenegocio.com.mx</p>
            </div>
            <div class="channel__type">
                <img src="../assets/img/channel-place.png" alt="channel place">
                <p>Av. Tulugar Gander 152, CDMX.</p>
            </div>
        </div>
    </div>
</section>
<?php require_once("footer.php")?>
</body>
</html>