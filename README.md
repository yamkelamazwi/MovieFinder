# 🎬 MovieFinder

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![OMDb API](https://img.shields.io/badge/API-OMDb-01d277?style=for-the-badge)
![Responsive Design](https://img.shields.io/badge/Mobile_First-Responsive-success?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge)

## 📖 Overview

## 🔗 Live Demo

🌐 **Live Site:**  
https://yamkelamazwi.github.io/movie-app/

📂 **Source Code:**  
https://github.com/yamkelamazwi/MovieFinder


MovieFinder is a mobile-first movie search application that allows users to search for movies, series, and games using the OMDb API.

Users can search by title, browse matching results, and select a result to view detailed information including:

- Movie Poster
- Plot
- IMDb Rating
- Genre
- Director
- Cast
- Runtime
- Release Year

The application was built to strengthen core JavaScript concepts such as asynchronous programming, API consumption, DOM manipulation, event handling, and responsive design.

---

## 🚀 Features

✅ Mobile-first responsive design

✅ Search movies, series, and games

✅ Displays multiple search results

✅ Poster thumbnails in search results

✅ Click-to-view detailed movie information

✅ Handles empty input validation

✅ Handles missing posters

✅ Error handling with `try/catch/finally`

✅ Loading states while searching

✅ Clear results functionality

✅ Dynamic DOM updates

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- OMDb API
- Fetch API
- Async/Await

---

## 📱 Mobile-First Approach

The application was designed with a mobile-first mindset.

Search results are displayed as easily tappable cards that include:

- Thumbnail poster
- Movie title
- Release year

The layout scales naturally for larger screens while prioritizing usability on mobile devices.

---

## 🧠 Key Learnings

This project helped reinforce several important JavaScript concepts:

### DOM Manipulation

- `querySelector()`
- `createElement()`
- `innerHTML`
- Dynamic content rendering

### Event Handling

- Form submissions
- Click events
- User interactions

### Async JavaScript

- `fetch()`
- `async/await`
- API requests
- Promise handling

### Error Handling

- `try`
- `catch`
- `finally`

### Working with APIs

- Search endpoints
- Query parameters
- Handling API responses
- Using unique IMDb IDs to retrieve detailed information

---

## 🎯 Biggest Challenges

### 1. Moving From Single Results to Multiple Results

The application originally used:

```javascript
&t=
```

which returned a single movie.

To support multiple results, the application was refactored to use:

```javascript
&s=
```

which returns an array of matching titles.

This introduced the need to:

- Loop through results
- Dynamically generate UI elements
- Handle user selection

---

### 2. Fetching Detailed Movie Data

Search results do not include complete movie information.

A second API request using:

```javascript
&i=
```

and the movie's `imdbID`

was required to retrieve:

- Plot
- Cast
- Runtime
- IMDb Rating
- Director

---

### 3. Handling Missing Posters

Not every movie in the database contains poster artwork.

The application includes checks to prevent broken images when the API returns:

```javascript
Poster: "N/A"
```

---

### 4. Mobile-First UI Design

Creating a clean experience for small screens required:

- Responsive layouts
- Consistent image sizing
- Readable spacing
- Touch-friendly search results

---

## 🌟 Highlights

Some moments that significantly improved the app:

- Transitioning from a single-result search to a multi-result search experience.
- Displaying movie posters directly within search results.
- Loading detailed movie information on demand.
- Hiding search results after a movie is selected.
- Creating a cleaner IMDb-inspired user experience.

---

## 🔮 Future Improvements

Potential future enhancements include:

- Search history
- Favorite movies list
- Local Storage support
- Dark/Light mode toggle
- Pagination for large result sets
- Advanced filtering
- Movie trailers
- Similar movie recommendations

---

## 📷 Sample User Flow

```text
Search "Batman"
        ↓
Multiple Results Displayed
        ↓
User Selects Movie
        ↓
Movie Details Loaded
        ↓
Poster, Plot, Rating, Cast & Runtime Displayed
```

---

## 🙌 Reflection

This project started as a simple movie search tool and evolved into a more complete interactive application. Along the way, it provided hands-on experience with APIs, asynchronous JavaScript, dynamic UI rendering, and responsive design principles.

Most importantly, it highlighted the value of debugging, iterative development, and building features incrementally while keeping user experience at the center of 
