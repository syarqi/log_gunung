const loginForm = document.getElementById('login-form');
const loginResponse = document.getElementById('login-response');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    loginResponse.textContent = 'halo, selamat datang user!!';
});