// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderMovies } from '../render-util.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="movie-card"><a href="#"><h2>The Gentlemen</h2></a><img src="./assets/The-Gentlemen.jpg"><h3>Rating: <span class="emoji">👏</span></h3></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMovies();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
