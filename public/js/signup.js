const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log("beginning")
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
console.log(name)
console.log(email)
console.log(password)
    if (name && email && password) {
        console.log("hello world")
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
        });
    
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert('Failed to sign up.');
      }
    }
  };

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);