import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../store/moviesSlice";

function Main() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const movieText = "avengers";
  //   const fetchMovies = async () => {
  //     const response = await axios
  //       .get(
  //         `https://www.omdbapi.com/?apikey=9dd25689&s=${movieText}&i=tt1285016`
  //       )
  //       .catch((err) => {
  //         console.log("The error is ", err);
  //       });
  //     dispatch(addMovies(response.data));
  //   };
  //   fetchMovies();
  // }, [dispatch]);
  // useEffect(() => {
  //   const showText = "marvel";
  //   const fetchMovies = async () => {
  //     const response = await axios
  //       .get(
  //         `https://www.omdbapi.com/?apikey=9dd25689&s=${showText}&i=tt1285016&type=series`
  //       )
  //       .catch((err) => {
  //         console.log("The error is ", err);
  //       });
  //     dispatch(addShows(response.data));
  //   };
  //   fetchMovies();
  // }, [dispatch]);
  const movieText = "Avengers";
  const showText = "Friends";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);
  const movieData = useSelector((state) => state.allMovies.movies);
  const showData = useSelector((state) => state.allMovies.shows);

  let newMovie = "";
  let newShow = "";
  if (movieData.Response === "True") {
    newMovie = movieData.Search.map((movies, index) => {
      return <MovieCard data={movies} key={index} />;
    });
  }
  if (showData.Response === "True") {
    newShow = showData.Search.map((movies, index) => {
      return <MovieCard data={movies} key={index} />;
    });
  }

  return (
    <div>
      <h1>Movies</h1>
      <div className="cards_container">{newMovie}</div>
      <h1>Shows</h1>
      <div className="cards_container">
        {newShow}
        {/* <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard /> */}
      </div>
    </div>
  );
}

export default Main;
