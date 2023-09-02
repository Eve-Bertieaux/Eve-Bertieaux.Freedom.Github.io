const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = {
    name: nameInput.value,
    email: emailInput.value,
    subject: subjectInput.value,
    message: messageInput.value
  };
  fetch('send-mail.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      location.href = 'thank-you.html';
    } else {
      throw new Error('Une erreur est survenue.');
    }
  })
  .catch(error => {
    console.error(error);
  });
});



