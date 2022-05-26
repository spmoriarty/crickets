import { logout } from '../fetch-utils.js';

const authButton = document.getElementById('auth-button');
const homeButton = document.getElementById('home-button');

// console.log(logoutButton);

authButton.addEventListener('click', () => {
    logout();
});

homeButton.addEventListener('click', () => {
    window.location.href = '/';
});