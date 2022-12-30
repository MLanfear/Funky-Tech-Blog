// SIGNUP FUNCTION
async function signupFormHandler(e) {
    e.preventDefault();

    const username = document.getElementById('username-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();

    if(username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    };
};

// LOGIN FUNCTION
async function loginFormHandler(e) {
    e.preventDefault();

    const username = document.getElementById('username-login').value.trim();
    const password = document.getElementById('password-login').value.trim();

    if(username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    };
};

// SIGNUP EVENT LISTENER
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);