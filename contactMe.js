const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting normally

  if (validateForm()) {
    // get the form data
    const formData = new FormData(form);

    // mandamos los datos usando fetch
    fetch(form.action, {
      method: form.method,
      body: formData
    })
    .then(response => {
      if (response.ok) {
        // si se logra enviar te envia un mensaje
        showSuccessMessage();
      } else {
        // si no se puede enviar te tira un mensaje
        showErrorMessage();
      }
    })
    .catch(error => {
      // si hay un error en los datos te tira un mensaje
      showErrorMessage();
    });
  }
});

function validateForm() {
  let isValid = true;

  if (nameInput.value.trim() === '') {
    isValid = false;}}