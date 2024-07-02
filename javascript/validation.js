function emailValidation() {
  const form = document.getElementById('form');
  const emailInput = form.email;
  const emailConfirmInput = form.email_confirm;
  
  function validateEmails() {
    const errorMessage = document.querySelector('.alert');
    if (emailInput.value !== emailConfirmInput.value) {
      if (!errorMessage) {
        const element = document.createElement('p');
        const message = document.createTextNode("El correo electrónico no coincide");
        element.appendChild(message);
        form.email_confirm.parentElement.appendChild(element);
        element.classList.add("alert");
      }
      emailConfirmInput.classList.add("error_background");
    } else {
      if (errorMessage) {
        errorMessage.remove();
      }
      emailConfirmInput.classList.remove("error_background");
    }
  }

  emailConfirmInput.addEventListener('input', validateEmails);
  form.addEventListener('submit', e => {
    if (emailInput.value !== emailConfirmInput.value) {
      e.preventDefault();
      validateEmails();
    }
  });
}

window.onload = emailValidation;