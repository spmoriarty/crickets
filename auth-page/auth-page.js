import { redirectIfLoggedIn, signInUser, signupUser, checkAuth, logout } from '../fetch-utils.js';


const logoutButton = document.getElementById('logout');
const signInForm = document.getElementById('sign-in');
const signUpForm = document.getElementById('sign-up');

// if user currently logged in, redirect

redirectIfLoggedIn();

logoutButton.addEventListener('click', () => {
    logout();
});

signUpForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(signUpForm);
    const user = await signupUser(data.get('email'), data.get('password'));

    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});

signInForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = new FormData(signInForm);
    const user = await signInUser(data.get('email'), data.get('password'));

    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});
