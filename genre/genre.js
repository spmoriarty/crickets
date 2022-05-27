import { getMoviesByGenre } from '../fetch-utils.js';

const pageTitle = document.getElementById('genre-page');
const movieGenreList = document.getElementById('movie-genre-list');

async function loadMovieGenre