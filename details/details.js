import { logout, getMoviesById } from '../fetch-utils.js';

const logoutButton = document.getElementById('logout-button');
const homeButton = document.getElementById('home-button');

const movieTitle = document.querySelector('.movie-title');
const rating = document.querySelector('.rating');
const genre = document.querySelector('.genre');
const cast = document.querySelector('.cast');
const plot = document.querySelector('.plot');
const moviePoster = document.querySelector('.movie-poster');

// console.log(logoutButton);

logoutButton.addEventListener('click', () => {
    logout();
});

homeButton.addEventListener('click', () => {
    window.location.href = '/';
});

async function displayMovieDetails() {
    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get('id');
    const movie = await getMoviesById(id);
    
    movieTitle.textContent = movie.title;
    rating.textContent = movie.rating;
    moviePoster.src = `.${movie.img}`;
    genre.textContent = movie.genre;
    cast.textContent = movie.cast;
    plot.textContent = movie.plot;

}

displayMovieDetails();