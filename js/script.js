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
