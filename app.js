import { getMovies, getMoviesByGenre, logout, getUser, handleAuthentication, handleLogout } from './fetch-utils.js';
import { renderMovies, renderMoviesByGenre } from './render-util.js';

const containerDisplay = document.querySelector('.container-display');
const authButton = document.getElementById('auth-button');

const actionGenre = document.getElementById('action-genre');

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

actionGenre.addEventListener('click', async () => {
    containerDisplay.textContent = '';

    const data = await getMoviesByGenre();
    console.log(data);
    for (let movie of data) {
        const movieDiv = renderMoviesByGenre(movie);
        containerDisplay.append(movieDiv);
    }
    console.log('clicking the button');
});


displayMovies();