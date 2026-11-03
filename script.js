const form = document.querySelector("form");
const input = document.querySelector("input");
const results = document.querySelector("#results");
const poster = document.querySelector("#poster");
const plot = document.querySelector("#plot");
const rating = document.querySelector("#rating");
const genre = document.querySelector("#genre");
const director = document.querySelector("#director");
const actors = document.querySelector("#actors");
const runTime = document.querySelector("#runtime");
const button = document.querySelector("button");
const clearButton = document.querySelector("#clear-btn");
const movieCard = document.querySelector("#movie-card");
const searchResults = document.querySelector("#search-results");
const trailer = document.querySelector("#trailer");
const trailerHeading = document.querySelector("#trailer-heading");
const trailerMessage = document.querySelector("#trailer-message");

const TMDB_API_KEY = "12e5456933e9f85488855179b43f162a";

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) {
    results.textContent = "Please enter a movie title";
    return;
  }

  results.textContent = "Loading...";

  button.disabled = true;
  button.textContent = "Searching...";

  const url = `https://www.omdbapi.com/?apikey=d0b490&s=${query}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "False") {
      results.textContent = data.Error;
      searchResults.innerHTML = "";
      return;
    }

    results.textContent = "Select a movie";

    searchResults.innerHTML = "";
    
    data.Search.forEach((movie) => {
    
    const movieButton = document.createElement("button");

    movieButton.innerHTML = `
      ${
      movie.Poster !== "N/A"
      ? `<img src="${movie.Poster}" alt="${movie.Title} poster">`
    : ""
}

    <div>
      <strong>${movie.Title}</strong>
      <span>${movie.Year}</span>
    </div>
  `;

  movieButton.addEventListener("click", async () => {
  const movieUrl = `https://www.omdbapi.com/?apikey=d0b490&i=${movie.imdbID}`;

  try {
    const response = await fetch(movieUrl);
    const movieData = await response.json();

    results.textContent =
      `${movieData.Title} (${movieData.Year})`;

    if (movieData.Poster === "N/A") {
    poster.hidden = true;
    } else {
    poster.src = movieData.Poster;
    poster.hidden = false;
}

    plot.textContent = movieData.Plot;
    rating.textContent =
      `IMDb Rating: ${movieData.imdbRating}`;

    genre.textContent =
      `Genre: ${movieData.Genre}`;

    director.textContent =
      `Director: ${movieData.Director}`;

    actors.textContent =
      `Actors: ${movieData.Actors}`;

    runTime.textContent =
      `Runtime: ${movieData.Runtime}`;

    movieCard.style.display = "block";

    trailerHeading.hidden = false;
    trailerMessage.hidden = false;
    trailer.hidden = true;

    trailerMessage.textContent =
    "Loading trailer...";

    const tmdbSearchUrl =
    `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(movieData.Title)}`;

    const tmdbResponse = await fetch(tmdbSearchUrl);
    const tmdbData = await tmdbResponse.json();

    if (tmdbData.results.length === 0) {
    trailerMessage.textContent =
    "No trailer found.";

    return;
  }

  const tmdbId = tmdbData.results[0].id;

  const tmdbVideosUrl =
  `https://api.themoviedb.org/3/movie/${tmdbId}/videos?api_key=${TMDB_API_KEY}`;

  const videosResponse = await fetch(tmdbVideosUrl);
  const videosData = await videosResponse.json();

  const trailerData = videosData.results.find(
  (video) =>
    video.site === "YouTube" &&
    video.type === "Trailer"
);

if (!trailerData) {
  trailerMessage.textContent =
    "No trailer available.";

  return;
}

trailer.src =
  `https://www.youtube.com/embed/${trailerData.key}`;

  trailer.src =
  `https://www.youtube.com/embed/${trailerData.key}`;

console.log(trailerData);
console.log(trailer.src);

trailer.hidden = false;
trailerMessage.hidden = true;

trailer.hidden = false;
trailerMessage.hidden = true;


    searchResults.innerHTML = "";

  } catch (error) {
    console.log(error);
  }
});

  searchResults.appendChild(movieButton);
});  

    input.value = "";

  } catch (error) {
    console.log(error);
    results.textContent = "Something went wrong. Please try again.";

    poster.src = "";
    poster.hidden = true;
    plot.textContent = "";
    rating.textContent = "";
    genre.textContent = "";
    movieCard.style.display = "none";
  } 
  finally {
    button.disabled = false;
    button.textContent = "Search";
  }
});

clearButton.addEventListener("click", () => {
  input.value = "";
  results.textContent = "Search for a movie to begin.";
  searchResults.innerHTML = "";
  poster.src = "";
  poster.hidden = true
  plot.textContent = "";
  rating.textContent = "";
  genre.textContent = "";
  movieCard.style.display = "none";

  trailer.hidden = true;
  trailer.src = "";
  trailerHeading.hidden = true;
  trailerMessage.hidden = true;
  trailerMessage.textContent = "";

  button.disabled = false;
  button.textContent = "Search";
});
