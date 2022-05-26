import { getMovies } from './fetch-utils.js';
import { renderMovies } from './render-util.js';

const containerDisplay = document.querySelector('.container-display');

async function displayMovies() {
    const data = await getMovies();
    for (let movie of data) {
        const movieDiv = renderMovies(movie);
        containerDisplay.append(movieDiv);
    }
}

displayMovies();