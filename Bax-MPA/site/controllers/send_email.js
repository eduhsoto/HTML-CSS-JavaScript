"use strict";
const $form = document.querySelector('.form__contact');
const sendForm =  (e) => {
    e.preventDefault();
    const options = {
        method: "POST",
        body: new FormData(e.target),
        mode: "cors"
    }
    
    fetch('https://taniacv.000webhostapp.com/form_contact.php', options)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(result => showResponse(result))
    .catch(err => showError(err));
}

$form.addEventListener("submit", sendForm);

const showResponse = (result) => {
    const d = document;
    const $error = d.querySelector('.error');
    const $textError = d.querySelector('.error__text');
    const $listError = d.querySelector('.list__error');
    const $succesful = d.querySelector('.succesful');

    if(result.sendData){
        $form.classList.add('form__contact-hidden');
        $succesful.classList.add('active');
        $form.reset();
    }

    if(result.sendData === false){
        $error.classList.add('active');
        if (typeof result.message !== 'object') {
            $listError.innerHTML = "";
            $textError.textContent = result.message;
        }else{
            $listError.innerHTML = "";
            $textError.textContent = "";
            for (const key in result.message) {
                $listError.innerHTML += `<li>${result.message[key]}</li>`;
            }
        }
    }
}

const showError = (err) => {
    const $errorNet = document.querySelector('.error__net');
    $errorNet.classList.add('active');
    console.log(err);
}

const validateName = (() => {
    const $name = document.querySelector("#fullname");
    const $validateN = document.querySelector(".validate__name");

    $name.onkeyup = () => {
        const CADENA = /^[ a-zA-ZÑñáéíóúÁÉÍÓÚ ]+$/;
        let ok = CADENA.exec($name.value);
        if(!ok){
            $validateN.style.display = "block";
            $name.classList.add("error__input");
            $name.classList.remove("correct__input");
        }else{
            $validateN.style.display = "none";
            $name.classList.add("correct__input");
            $name.classList.remove("error__input");
        }
    }
})();

const validateMsg = (() => {
    const $msg = document.querySelector("#message");
    const $validateM = document.querySelector(".validate__message");

    $msg.onkeyup = () => {
        const CADENA = /^[ a-zA-ZÑñáéíóúÁÉÍÓÚ -,-;:_.?¿¡!]+$/;
        let ok = CADENA.exec($msg.value);
        if(!ok){
            $validateM.style.display = "block";
            $msg.classList.add("error__input");
            $msg.classList.remove("correct__input");
        }else{
            $validateM.style.display = "none";
            $msg.classList.add("correct__input");
            $msg.classList.remove("error__input");
        }
    }
})();

const validateEmail = (() => {
    const $gmail = document.querySelector("#email");
    const $validateG = document.querySelector(".validate__correo");

    $gmail.onkeyup = () => {
        const CADENA = /^[A-Za-z0-9.-_]+@[A-Za-z]+\.[A-Za-z]+$/;
        let ok = CADENA.exec($gmail.value);
        if(!ok){
            $validateG.style.display = "block";
            $gmail.classList.add("error__input");
            $gmail.classList.remove("correct__input");
        }else{
            $validateG.style.display = "none";
            $gmail.classList.add("correct__input");
            $gmail.classList.remove("error__input");
        }
    }
})();




