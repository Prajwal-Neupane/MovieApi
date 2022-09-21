import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAsyncShows, fetchAsyncMovies } from "../store/moviesSlice";

function Navbar() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    dispatch(fetchAsyncMovies(text));
    dispatch(fetchAsyncShows(text));
    setText("");
  };
  return (
    <div className="nav_container">
      <div className="nav_logo">
        <Link to="/">
          <img
            src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg"
            alt="NetflixLogo"
          />
        </Link>
      </div>

      <div className="nav_search">
        <TextField
          className="nav_search_input"
          id="standard-basic"
          label="Search"
          variant="standard"
          onChange={handleChange}
        />
        <Button
          onClick={handleClick}
          className="search_button"
          variant="contained"
          size="medium"
        >
          Search
        </Button>
      </div>
      <div className="nav_icons">
        <img
          src="https://img.icons8.com/external-bearicons-glyph-bearicons/344/external-User-essential-collection-bearicons-glyph-bearicons.png"
          alt="userIcon"
        />
      </div>
    </div>
  );
}

export default Navbar;
