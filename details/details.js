import { logout } from '../fetch-utils.js';

const logoutButton = document.getElementById('logout-button');
const homeButton = document.getElementById('home-button');

// console.log(logoutButton);

logoutButton.addEventListener('click', () => {
    logout();
});
