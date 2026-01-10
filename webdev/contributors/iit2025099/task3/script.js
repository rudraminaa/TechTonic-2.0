document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); 
  
  clearErrors();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  let isValid = true;
  
  if (name === '') {
    showError('name-error', 'Name is required');
    isValid = false;
  }
  
  if (email === '') {
    showError('email-error', 'Email is required');
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError('email-error', 'Please enter a valid email address');
    isValid = false;
  }
  
  if (message === '') {
    showError('message-error', 'Message is required');
    isValid = false;
  }
  
  if (isValid) {
    alert('Form submitted successfully!');
    this.reset();
  }
});

function showError(errorId, message) {
  const errorEl = document.getElementById(errorId);
  errorEl.textContent = message;
  errorEl.classList.add('show');
}

function clearErrors() {
  document.querySelectorAll('.error').forEach(error => {
    error.textContent = '';
    error.classList.remove('show');
  });
}

