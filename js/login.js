document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault();
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;
      // Implement your login logic here
      alert(`Logging in with ${email}`);
    });
  });
  