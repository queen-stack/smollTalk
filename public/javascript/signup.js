async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#signup-username-input').value.trim();
    const email = document.querySelector('#signup-email-input').value.trim();
    const password = document.querySelector('#signup-password-input').value.trim();
    const linkedin = document.querySelector('#signup-linkedin-input').value.trim();
    const github = document.querySelector('#signup-github-input').value.trim();
    const twitter = document.querySelector('#signup-twitter-input').value.trim();

    console.log("this button was clicked")

    if (username && email && password && linkedin) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password,
                linkedin,
                github,
                twitter
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        // console.log(response);

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
