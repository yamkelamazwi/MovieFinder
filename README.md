# 🎬 MovieFinder

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![OMDb API](https://img.shields.io/badge/API-OMDb-01d277?style=for-the-badge)
![TMDb API](https://img.shields.io/badge/API-TMDb-032541?style=for-the-badge)
![Responsive Design](https://img.shields.io/badge/Mobile_First-Responsive-success?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge)

## 📖 Overview

MovieFinder is a mobile-first movie search application that allows users to search for movies, series, and games using the OMDb API.

Users can browse search results, view detailed movie information, and watch official trailers directly within the application through TMDb and YouTube integration.

The application was built to strengthen core JavaScript concepts such as asynchronous programming, API consumption, DOM manipulation, event handling, working with multiple APIs, and responsive design.

---

## 🔗 Live Demo

🌐 **Live Site:**  
https://yamkelamazwi.github.io/MovieFinder/

📂 **Source Code:**  
https://github.com/yamkelamazwi/MovieFinder

---

## 🚀 Features

✅ Mobile-first responsive design

✅ Search movies, series, and games

✅ Displays multiple search results

✅ Poster thumbnails in search results

✅ Click-to-view detailed movie information

✅ View movie plot, genre, cast, runtime, director, and IMDb rating

✅ Watch official movie trailers directly in the application

✅ Uses multiple APIs to enrich movie information

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
- TMDb API
- Fetch API
- Async/Await
- YouTube Embedded Player

---

## 📸 Screenshot

```html
<p align="center">
  <img src="./images/Screenshot%202025-09-03%20200748.png" alt="MovieFinder Screenshot" width="800">
</p>
```

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
- Promise handling
- Multiple API requests

### Error Handling

- `try`
- `catch`
- `finally`

### Working with APIs

- Search endpoints
- API chaining
- Query parameters
- Handling API responses
- Using IMDb IDs
- Converting data between different API services

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
- Genre

---

### 3. Implementing Trailer Support

Adding movie trailers introduced a much more advanced workflow.

The OMDb API does not provide trailer data.

To solve this:

1. Retrieve movie information from OMDb.
2. Use the movie title to search TMDb.
3. Retrieve the TMDb movie ID.
4. Request available videos for that movie.
5. Identify the official trailer.
6. Display the trailer using an embedded YouTube player.

This was my first experience combining multiple APIs to create a richer user experience.

---

### 4. Handling Missing Posters

Not every movie in the database contains poster artwork.

The application includes checks to prevent broken images when the API returns:

```javascript
Poster: "N/A"
```

---

### 5. Mobile-First UI Design

Creating a clean experience for small screens required:

- Responsive layouts
- Consistent image sizing
- Readable spacing
- Touch-friendly search results

---

## 🌟 Highlights

Some moments that significantly improved the application:

- Transitioning from a single-result search to a multi-result search experience
- Displaying movie posters directly within search results
- Loading detailed movie information on demand
- Integrating TMDb and YouTube for trailer playback
- Hiding search results after a movie is selected
- Creating a cleaner IMDb-inspired user experience
- Successfully working with multiple APIs in a single application

---

## 🔮 Future Improvements

Potential future enhancements include:

- Search history
- Favorite movies list
- Local Storage support
- Dark/Light mode toggle
- Pagination for large result sets
- Advanced filtering
- Similar movie recommendations
- Trending movies section

---

## 📷 Sample User Flow

```text
Search "Batman"
        ↓
Multiple Results Displayed
        ↓
User Selects Movie
        ↓
OMDb Loads Movie Details
        ↓
TMDb Retrieves Trailer
        ↓
Trailer Embedded In App
        ↓
Complete Movie Experience Displayed
```

---

## 🙌 Reflection

This project started as a simple movie search tool and evolved into a more complete movie discovery application.

Along the way, it provided hands-on experience with API consumption, asynchronous JavaScript, dynamic UI rendering, responsive design, and integrating multiple external services into a single workflow.

The most rewarding milestone was implementing trailer support through TMDb and YouTube, which transformed the application from a movie information tool into a richer and more engaging user experience.

---

## 👨‍💻 Author

### Yamkela Mazwi

Built as part of my JavaScript learning journey to gain hands-on experience with APIs, asynchronous programming, DOM manipulation, and modern frontend development.

**GitHub:** https://github.com/yamkelamazwi

---

⭐ If you found this project interesting, consider giving it a star!
