async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#signup-username').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
    const linkedin = document.querySelector('#signup-linkedin').value.trim();

    if (username && email && password && linkedin) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password,
                linkedin
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // check the response status
        if (response.ok) {
            console.log('success');
            document.location.replace('/home');
        } else {
            alert(response.statusText);
        }
    }
}

//document.querySelector('#signUpModal').addEventListener('submit', signupFormHandler);
document.querySelector('#signUpBtn').addEventListener('click', signupFormHandler);