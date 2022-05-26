export function renderMovies(movie) {
    const div = document.createElement('div');
    div.classList.add('movie-card');

    const a = document.createElement('a');
    a.href = '#';

    const img = document.createElement('img');
    img.src = `${movie.img}`;

    const h2 = document.createElement('h2');
    h2.textContent = `${movie.title}`;

    const h3 = document.createElement('h3');
    h3.textContent = 'Rating: ';

    const span = document.createElement('span');
    span.classList.add('emoji');
    span.textContent = '👏';

    h3.append(span);
    a.append(h2);
    div.append(a, img, h3);

    return div;
}

