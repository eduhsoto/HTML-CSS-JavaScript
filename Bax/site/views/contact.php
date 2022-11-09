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
        <div class="left object__animate right__animate">
        <img src="../assets/img/couple-entrepreneurs.png" alt="couple entrepreneurs" class="img_full">
        </div>
        
        <div class="form object__animate left__animate">
            <form action="" id="form__contact" class="flex__column form__contact">
                <div class="flex__column group__date-form">
                <label for="fullname" class="p__color p__roboto p__label">Nombre y apellido:</label>
                <input type="text" name="fullname" id="fullname" placeholder="Escribe tu nombre completo">
                <p class="validate__name p__robot">El nombre solo debe contener letras</p>
                </div>
                <div class="flex__column group__date-form">
                <label for="email" class="p__color p__roboto p__label">E-mail:</label>
                <input type="text" name="email" id="email" placeholder="alguien@nombre.dominio">
                <p class="validate__correo p__robot">Ingrese un correo válido</p>
                </div>
                <div class="flex__column group__date-form">
                <label for="message" class="p__color p__roboto p__label">Tu mensaje:</label>
                <input type="text" name="message" id="message" placeholder="Escribe tu mensaje">
                <p class="validate__message p__robot">Solo ingrese el mensaje que deba ingresar, no es necesario agregar números o caracteres especiales</p>
                </div>
                <div class="error">
                    <p class="p__error p__roboto error__text"></p>
                    <ul class=" p__roboto list__error"></ul>
                </div>
                <div class="error__net">
                <p class="p__error p__roboto">Fallo al enviar tus datos, revisa tu conexión a internet y vuelve a intentar.</p>
                <p class="p__error p__roboto">Recarge esta pagina una vez conectado a la red.</p>
                </div>
                <button type="submit" class="submit button__cta">Enviar</button>
            </form>
            <div class="succesful flex__column">
                <div>
                <p class="p__roboto center__text bold">¡Tu mensaje fue enviado con éxito!</p>
                <p class="p__roboto center__text bold">Pronto nos pondremos en contacto contigo</p>
                </div>
                <p class="p__roboto center__text">Para no perderte ninguna noticia, puedes seguirnos en nuestras redes sociales</p>
                <div class="network__social">
                    <img src="../assets/img/succ_facebook-icon.png" alt="facebook icon" class="social">
                    <img src="../assets/img/succ_linkedin-icon.png" alt="linkedin icon" class="social">
                    <img src="../assets/img/succ_twitter-icon.png" alt="twitter icon" class="social">
                </div>
            </div>
        </div>
    </div>
    <?php require("curveLU.php")?>
</section>
<section>
    <div class="container flex__column">
        <h1 class="text__principal">Otros canales de comunicación</h1>
        <div class="channels card___grid">
            <div class="channel__type card__item">
                <img src="../assets/img/channel-phone.png" alt="channel phone">
                <p class="p__color p__roboto p__contact">(+52) 22-2365- 8547</p>
            </div>
            <div class="channel__type card__item">
                <img src="../assets/img/channel-email.png" alt="channel email">
                <p class="p__color p__roboto">E-mail:</p>
                <p class="p__color p__roboto p__contact">baxsoluciones@escueladenegocio.com.mx</p>
            </div>
            <div class="channel__type card__item">
                <img src="../assets/img/channel-place.png" alt="channel place">
                <p class="p__color p__roboto p__contact">Av. Tulugar Gander 152, CDMX.</p>
            </div>
        </div>
    </div>
    </section>
<?php require_once("footer.php")?>
<script type="text/javascript" src="./controllers/send_email.js"></script>
<script type="text/javascript" src="./helpers/interactions.js"></script>
</body>
</html>