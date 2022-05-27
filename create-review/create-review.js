import { logout } from '../fetch-utils.js';

const logoutButton = document.getElementById('auth-button');
const homeButton = document.getElementById('home-button');

logoutButton.addEventListener('click', () => {
    logout();
});

homeButton.addEventListener('click', () => {
    window.location.href = '/';
});