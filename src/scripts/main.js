const popupButtons = document.querySelectorAll('.popup-open');
popupButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const popup = document.querySelector('.popup');
        popup.classList.add('active');
    });
})
// Скрыть popup
document.querySelector('.popup__close').addEventListener('click', () => {
  document.querySelector('.popup').classList.remove('active');
});

const forms = document.querySelectorAll('.contact-form');
forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('sending form')
    emailjs.sendForm("service_n7wti98", "template_u101nb9", e.target)
      .then(() => alert("Письмо отправлено!"))
      .catch((error) => alert("Ошибка: " + error.text));
  });  
})
