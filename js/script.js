function sendMessage() {
  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var subject = document.querySelector("#subject").value;
  var message = document.querySelector("#message").value;

  // Para verificar si algún campo está vacío
  if (!name || !email || !subject || !message) {
    alert("Por favor complete todos los campos.");
    return;
  }

  (function () {
    emailjs.init("wpXqdH21THOWaW59s"); // Account Public Key
  })();
  var serviceID = "service_mr14mef";
  var templateID = "template_i0prtn8";

  var params = {
    sendername: name,
    senderemail: email,
    subject: subject,
    message: message,
  };

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert("¡Gracias, " + name + "! Su mensaje ha sido enviado.");
    })
    .catch();
}

// Burger menus
document.addEventListener('DOMContentLoaded', function() {
  // open
  const burger = document.querySelectorAll('.navbar-burger');
  const menu = document.querySelectorAll('.navbar-menu');

  if (burger.length && menu.length) {
      for (var i = 0; i < burger.length; i++) {
          burger[i].addEventListener('click', function() {
              for (var j = 0; j < menu.length; j++) {
                  menu[j].classList.toggle('hidden');
              }
          });
      }
  }

  // close
  const close = document.querySelectorAll('.navbar-close');
  const backdrop = document.querySelectorAll('.navbar-backdrop');

  if (close.length) {
      for (var i = 0; i < close.length; i++) {
          close[i].addEventListener('click', function() {
              for (var j = 0; j < menu.length; j++) {
                  menu[j].classList.toggle('hidden');
              }
          });
      }
  }

  if (backdrop.length) {
      for (var i = 0; i < backdrop.length; i++) {
          backdrop[i].addEventListener('click', function() {
              for (var j = 0; j < menu.length; j++) {
                  menu[j].classList.toggle('hidden');
              }
          });
      }
  }
});