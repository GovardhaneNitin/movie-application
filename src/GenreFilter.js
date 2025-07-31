import React from "react";

const GenreFilter = ({ genres, onGenreChange, selectedGenre }) => {
  return (
    <div className="genre-filter">
      <label htmlFor="genre-select">Filter by Genre: </label>
      <select
        id="genre-select"
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}
      >
        <option value="All">All</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;
