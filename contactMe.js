const form = document.querySelector('#contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');
  
  if (!name.value || !email.value || !message.value) {
    alert('Please fill out all fields');
  } else if (!email.value.includes('@') || !email.value.endsWith('.com')) {
    alert('Please enter a valid email address');
  } else {
    // submit the form
    form.submit();
    alert('Form submitted successfully!');
  }
});

