async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#signup-username-input').value.trim();
    const email = document.querySelector('#signup-email-input').value.trim();
    const password = document.querySelector('#signup-password-input').value.trim();

    console.log("this button was clicked")

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
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

document.querySelector('#signupModalBtn').addEventListener('click', signupFormHandler);