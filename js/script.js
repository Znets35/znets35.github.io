  $(document).ready(function(){
    $('.slider').slick({
      dots: true,
      arrows: true,
    });
  });

    emailjs.init("omPp_62q-VOHuun-5");
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.sendForm("service_9lckcap", "template_9ofco5n", this)
      .then(() => alert("Сообщение отправлено!"))
      .catch((error) => alert("Ошибка: " + error));
  });