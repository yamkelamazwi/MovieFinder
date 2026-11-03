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

  const url = `https://www.omdbapi.com/?apikey=d0b490&t=${query}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "False") {
      results.textContent = data.Error;
      poster.src = "";
      poster.hidden = true;
      plot.textContent = "";
      rating.textContent = "";
      genre.textContent = "";
      movieCard.style.display = "none";
      return;
    }

    results.textContent = `${data.Title} (${data.Year})`;
    poster.src = data.Poster;
    poster.hidden = false;
    plot.textContent = data.Plot;
    rating.textContent = `IMDb Rating: ${data.imdbRating}`;
    genre.textContent = `Genre: ${data.Genre}`;
    movieCard.style.display = "block";
    director.textContent = `Director: ${data.Director}`;
    actors.textContent = `Actors: ${data.Actors}`;
    runtime.textContent = `Runtime: ${data.Runtime}`;

    input.value = "";

  } catch (error) {
    console.log(error);
    results.textContent = "Something went wrong. Please try again.";

    poster.src = "";
    poster.hidden = true;
    plot.textContent = "";
    rating.textContent = "";
    genre.textContent = "";
    movieCard.style.display - "none";
  } 
  finally {
    button.disabled = false;
    button.textContent = "Search";
  }
});

clearButton.addEventListener("click", () => {
  input.value = "";
  results.textContent = "Search for a movie to begin.";
  poster.src = "";
  poster.hidden = true
  plot.textContent = "";
  rating.textContent = "";
  genre.textContent = "";
  movieCard.style.display = "none";

  button.disabled = false;
  button.textContent = "Search";
});
