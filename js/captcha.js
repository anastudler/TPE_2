"use strict";
/*  Buscamos al boton captcha en el DOM para crear el evento */
let btn = document.querySelector("#btn-captcha").addEventListener("click", verificarCaptcha);


/* Creamos la funcion verificar */
function verificarCaptcha() {
    /* Creamos varables buscando la informacion del captcha*/
  let captcha = document.querySelector("#captcha").value;
  let inputCaptcha = document.querySelector("#input-captcha").value;
  let correcto = document.querySelector("#correcto");
/* Hicimos un if para reconocer el captcha ingresado y su respuesta es correcto o incorrecto */
  if (inputCaptcha === captcha) {
      correcto.innerHTML = "Correcto";
      console.log("correcto");
  }
  else {
      correcto.innerHTML = "Incorrecto";
      console.log("incorrecto");
  }
}
