<!DOCTYPE html>
<html lang="en">
<head>
    <?php require_once("header.php")?>
    <title>Bax - Capacitamos personas para que cumplan su sueño emprendedor</title>
</head>
<body>
<?php require_once("nav.php")?>
<section>
        <div class="container head">
            <div class="right object__animate right__animate">
                <h1 class="text__principal">Capacitamos personas para que cumplan su sueño emprendedor</h1>
                <p class="p__header">Te acompañamos en tu camino con profesionales experimentados y las mejores herramientas.</p>
                <a href="/courses" class="button__cta button__desktop">Conoce nuestros cursos</a>
            </div>

            <div class="left object__animate left__animate">
                <img src="./assets/img/enterprising-couple-in-cafeteria.png" alt="enterprising couple in cafeteria" class="img_full">
            </div>

            <div class="button__phone">
                <a href="/courses" class="button__cta">Conoce nuestros cursos</a>
            </div>
        </div>
        <?php require("curveRU.php")?>
    </section>

    <section class="philosophy">
        <div class="container card___grid">
            <div class="card__item object__animate card__animate">
                <h3 class="title__course">Misión</h3>
                <img src="./assets/img/mission-image.jpg" alt="mision woman on computer" class="philosophy__image">
                <p class="p__philosophy p__roboto">Nos enfocadamos en la educación de alto nivel para los pequeños y medianos emprendedores en México.</p>
            </div>

            <div class="card__item object__animate card__animate">
                <h3 class="title__course">Visión</h3>
                <img src="./assets/img/vision-image.jpg" alt="owner local clothing" class="philosophy__image">
                <p class="p__philosophy p__roboto">Aportar valor a la mayor cantidad posible de pequeños emprendedores.</p>
            </div>

            <div class="card__item object__animate card__animate">
                <h3 class="title__course">Valores</h3>
                <img src="./assets/img/values-image.jpg" alt="team meeting" class="philosophy__image">
                <p class="p__philosophy p__roboto">Creemos en el potencial de cada persona, en la superación personal y la determinación.</p>
            </div>
        </div>
    </section>

    <section class="section__courses">
        <div class="container flex__column flex__course-column">
            <h2>Nuestros cursos</h2>
            <p class="p__title p__color">Nuestra oferta académica te permitirá desempeñarte en las áreas de:</p>

            <div class="grid__courses">
                <div class="item__course course1 object__animate card__animate">
                    <div class="description__course">
                        <h3 class="title__course">Administración</h3>
                        <p class="p__roboto p__color">Suma conocimientos de gestión y administración altamente útiles y requeridos en toda empresa.</p>
                    </div>
                    <img src="./assets/img/management-course.png" alt="management course image" class="img__course">
                </div>

                <div class="item__course course2 object__animate card__animate">
                    <div class="description__course">
                        <h3 class="title__course">Contabilidad</h3>
                        <p class="p__roboto p__color">Aprende la mejor manera de atender las cuentas de tu negocio o de la empresa que vayas a trabajar.</p>
                    </div>
                    <img src="./assets/img/accounting-course.png" alt="accounting course image" class="img__course">
                </div>

                <div class="item__course course3 object__animate card__animate">
                    <div class="description__course course3">
                        <h3 class="title__course">Marketing</h3>
                        <p class="p__roboto">Gestiona, planifica y crea las mejores y mas nuevas estrategias de publicidad y promoción para tu emprendimiento o para clientes.</p>
                    </div>
                    <img src="./assets/img/marketing-course.png" alt="marketing course image" class="img__course">
                </div>
            </div>
        </div>
        <?php require("curveRD.php")?>
    </section>

    <section>
        <div class="container">
            <p class="graduate">De 1,038 egresados de la carrera de Administración, 919 se encuentran trabajando.</p>
            <div class="card___grid">
                <div class="card__item">
                    <img src="./assets/img/student-boy-on-notebook.png" alt="student boy on notebook" class="img_full">
                    <p class="p__graduate p__roboto">¿Sabías que tener conocimientos de Administración te permite contar con herramientas para gestionar de manera eficiente tu negocio?</p>
                </div>

                <div class="card__item">
                    <img src="./assets/img/img-porcentage.png" alt="porcentage imgage" class="img_full">
                </div>

                <div class="card__item">
                    <img src="./assets/img/laughing-girl.png" alt="laughing girl" class="img_full">
                    <p class="p__graduate p__roboto">¿Quieres ser Contador/a?</p>
                    <p class="p__graduate p__roboto">Contaduría está entre las carreras con menor porcentaje de informalidad y de desempleo en México.</p>
                </div>
            </div>
        </div>
        <?php require("curveLU.php")?>
    </section>

    <section>
        <div class="container" id="testimonials">
            <h2 class="testinomy hash__active">Testimonios</h2>

            <div class="card___grid object__animate right__animate">
                <div class="card__item ">
                    <img src="./assets/img/testimony-1.png" alt="testimony 1">
                    <p class="p__testinomy">"El curso fue muy interesante, muy didáctico en cuanto a la metodología de trabajo y contenidos. (…) todas las dudas fueron perfectamente respondidas. Creo que todo lo aprendido tiene mucho valor para el desempeño de nuestro trabajo profesional cotidiano. Gracias por el compromiso y predisposición del docente para con el curso."</p> 
                    <p class="p__testinomy">Juliana, 24 años</p>
                </div>
 
                <div class="card__item line__left">
                    <img src="./assets/img/testimony-2.png" alt="testimony 2">
                    <p class="p__testinomy">"El material entregado en el Curso de Marketing cubrió totalmente la necesidad, y el objetivo superó totalmente con lo propuesto. El curso esta relacionado con lo que realmente pasa en la empresa."</p> 
                    <p class="p__testinomy">Rosa, 37 años</p>
                </div>

                <div class="card__item line__left">
                    <img src="./assets/img/testimony-3.png" alt="testimony 3">
                    <p class="p__testinomy">"Una vez iniciados mis estudios, descubrí el trato personalizado, profesional y la excelente calidad humana de todos sus profesores. Todos de una forma u otra, contribuyeron motivándome, inspirándome y retándome a dar lo mejor de mí."</p> 
                    <p class="p__testinomy">Carlos, 45 años</p>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container cta">
            <h2 class="text__principal right">Aprende las mejores herramientas para hacer crecer tu negocio.</h2>
            
            <a href="" class="button__cta">Consulta Inscriciones</a>
        </div>
        <img src="./assets/img/curveLD.svg" alt="curve left down" class="curves curve__cta">
    </section>

    <section>
        <div class="container flex__start" id="about">
            
            <h2 class="hash__active">Nosotros</h2>
            
            <div class="card___grid">
                <div class="card__item object__animate right__animate">
                    <img src="./assets/img/about.png" alt="about" class="img_full">
                </div>

                <div class="object__animate right__animate">
                    <h3 class="title__course title__capitalize">La escuela</h3>
                    <p class="p__roboto p__color">Somos una escuela de larga trayectoria, ubicada en el centro de la Ciudad de México. Nuestros inicios se remontan al año 2002, estableciendonos como una de las primeras escuelas independientes avocadas a personas emprendedoras.</p>
                    <p class="p__roboto p__color">Contamos con un establecimiento moderno, en donde se dictan las clases presenciales, y tambien contamos con un campus virtual en donde llevamos a cabo tutoriales y material complementario.Creamos un ambiente seguro y confiable para que todos los estudiantes se sientan cómodos y conectados.</p>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container card___grid">
            <div class="">
                <h3 class="title__course title__capitalize">Staff</h3>
                <p class="p__color p__roboto">Contamos con un plantel de profesionales experimentados en las áreas dictadas. Cada miembro se desempeña en guiar, brindar los conocimiemtos y acompañar a cada estudiante en su proceso de aprendizaje.</p>
            </div>

            <div class="card__item flex__row">
                <img src="./assets/img/staff-member-1.png" alt="staff member 1">
                <img src="./assets/img/staff-member-2.png" alt="staff member 2">
                <img src="./assets/img/staff-member-3.png" alt="staff member 3">
            </div>

            <div class="card__item">
                <img src="./assets/img/ceo-director.png" alt="ceo director">
                <p class="p__title">Carlos Carrera</p>
                <p class="p__color p__roboto">CEO/Director BAX Soluciones</p>
            </div>
        </div>
        <img src="./assets/img/curveLU.svg" alt="curve left up" class="curves curve__staff">
    </section>

    <section>
        <div class="container">
            <div class="flex__column">
                <h2 class="text__principal center__text">Si quieres potenciarte y capacitarte, este es tu lugar.</h2>
                <a href="/contact" class="button__cta">Quiero inscribirme</a>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="qa__content">
            <p class="text__principal qa__text">Preguntas frecuentes</p>

            <ol>
                <div class="flex__horizontal"><li class="p__graduate p__roboto">¿Entregan certificaciones?</li><img src="./assets/img/keyboard_arrow_down.svg" alt="arrow down" class="arrow__down"></div>
                <div class="flex__horizontal"><li class="p__graduate p__roboto">¿Como puedo inscribirme?</li><img src="./assets/img/keyboard_arrow_down.svg" alt="arrow down" class="arrow__down"></div>
                <div class="flex__horizontal"><li class="p__graduate p__roboto">¿Necesito conocimientos previos para cursar</li><img src="./assets/img/keyboard_arrow_down.svg" alt="arrow down" class="arrow__down"></div>
            </ol>
        </div>
    </div>
    <img src="./assets/img/curveRD.svg" alt="curve right down" class="curves curve__staff">
    </section>

    <div class="container flex__content__center"><h2 class="text__principal">Tu futuro es hoy</h2></div>
<?php require_once("footer.php")?>
<script type="text/javascript" src="./helpers/interactions.js"></script>
</body>
</html>