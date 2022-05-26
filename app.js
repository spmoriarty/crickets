import { getMovies, logout, getUser, handleAuthentication, handleLogout } from './fetch-utils.js';
import { renderMovies } from './render-util.js';

const containerDisplay = document.querySelector('.container-display');
const authButton = document.getElementById('auth-button');


authButton.addEventListener('click', () => {
    logout();
});

async function displayMovies() {
    const data = await getMovies();
    for (let movie of data) {
        const movieDiv = renderMovies(movie);
        containerDisplay.append(movieDiv);
    }
    const user = getUser();
    if (user) {
        authButton.textContent = 'Logout';
        authButton.addEventListener('click', handleLogout);
    } else {
        authButton.textContent = 'Sign In / Sign Up';
        authButton.addEventListener('click', handleAuthentication);
    }
}

displayMovies();