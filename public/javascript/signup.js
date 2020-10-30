async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#signup-username').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
    const linkedin = document.querySelector('#signup-linkedin').value.trim();
    const twitter = document.querySelector('#signup-twitter').value.trim();
    const github = document.querySelector('#signup-github').value.trim();
    
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          linkedin,
          twitter,
          github,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status
      if (response.ok) {
        console.log('success');
        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
      }
    }
}
  
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
