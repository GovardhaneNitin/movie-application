## React Movie Application – Enhanced Version

This project is a React-based Movie Application that demonstrates the use of React components, state management, props, and data manipulation.

### Assignment Tasks Completed

#### Task 1: Add Genre Filtering

- Added a new `GenreFilter` component that displays a dropdown for selecting movie genres.
- Integrated genre filtering in `App.js` by:
  - Adding a `genreFilter` state to track the selected genre.
  - Creating a `handleGenreChange` function to update the genre filter.
  - Filtering movies by both search value and selected genre.
- Passed unique genres and the handler to the `GenreFilter` component.
- Updated `index.css` to add basic styling for the genre filter dropdown.

#### Task 2: Display Movie Release Year

- Modified the `MovieCard` and `moviecardlist` components to accept and display the `releaseYear` prop for each movie.
- The release year is now shown prominently on each movie card.

### Summary of Changes

- **App.js**: Added state and logic for genre filtering, integrated the new `GenreFilter` component, and ensured release year is passed to each movie card.
- **GenreFilter.js**: New component for genre selection, receiving genres and handler as props.
- **moviecard.js & moviecardlist.js**: Updated to accept and display the `releaseYear` prop.
- **index.css**: Added styles for the genre filter dropdown.

---

This enhanced application allows users to:

- Search movies by name
- Filter movies by genre
- View the release year of each movie

---

> **How to run:**
>
> 1. Clone the repository.
> 2. Run `npm install` to install dependencies.
> 3. Run `npm start` to launch the app.

---

**Assignment by:** Balagangadhar Reddy Sir
