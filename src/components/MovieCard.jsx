import React from "react";

import { Link } from "react-router-dom";

function MovieCard({ data }) {
  const { Title, Year, Poster, imdbID } = data;

  return (
    <div className="card_container">
      <Link to={`/details/${imdbID}`} style={{ textDecoration: "none" }}>
        <div className="card_image">
          <img src={Poster} alt="posterImage" />
        </div>
        <div className="card_title">
          <h1>{Title}</h1>
          <span>Genre: Romance</span> <br />
          <span>{Year}</span>
        </div>
        {/* <div className="card_details">
       
      </div> */}
      </Link>
    </div>
  );
  // "https://i.pinimg.com/236x/99/13/e9/9913e9386a41e737530149aca83c6b6c.jpg"
}

export default MovieCard;
