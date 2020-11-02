async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#login-username').value.trim();
    const password = document.querySelector('#login-password').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/home');
        } else {
            alert('Invalid Login, Please check the Username and Password!'); //review the context TBD
        }
    }
}

document.querySelector('#loginBtn').addEventListener('click', loginFormHandler);