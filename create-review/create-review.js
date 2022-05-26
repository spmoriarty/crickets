import { logout } from '../fetch-utils.js';

const logoutButton = document.getElementById('auth-button');

logoutButton.addEventListener('click', () => {
    logout();
});