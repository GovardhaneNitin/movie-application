import React from "react";

const Movie = ({ name, genre, url, releaseYear }) => {
  return (
    <div className="card tc bg-black dib br3 pa3 ma2 grow bw2 shadow-5">
      <img className="br3" src={url} alt="" height={350} width={250} />
      <h2 className="white">{name}</h2>
      <h3 className="white" style={{ fontWeight: "bold", color: "#FFD700" }}>
        {releaseYear}
      </h3>
      <p className="white">{genre}</p>
    </div>
  );
};

export default Movie;
