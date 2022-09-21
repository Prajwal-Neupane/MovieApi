import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clear, fetchAsyncDetails } from "../store/moviesSlice";
// import { clear, details } from "../store/moviesSlice";
// import axios from "axios";

function MovieDetails() {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncDetails(params.id));
    return () => {
      dispatch(clear());
    };
  }, [dispatch, params]);

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const response = await axios
  //       .get(
  //         `https://www.omdbapi.com/?apikey=9dd25689&i=${params.id}&Plot=full`
  //       )
  //       .catch((err) => {
  //         console.log("The error is ", err);
  //       });
  //     dispatch(details(response.data));
  //   };
  //   fetchMovies();
  //   return () => {
  //     dispatch(clear());
  //   };
  // }, [dispatch, params]);
  const data = useSelector((state) => state.allMovies.history);

  //   useEffect(() => {
  //     dispatch(details(params));
  //   }, []);
  //   const hello = useSelector((state) => state.allMovies.history);
  //   console.log(hello);

  return (
    <>
      {Object.keys(data).length === 0 ? (
        <div className="loading">
          <h1>Loading....</h1>
        </div>
      ) : (
        <div className="details_container">
          <div className="text_container">
            <h1>{data.Title}</h1>
            <p>{data.Plot}</p>
            <p>{data.Released}</p>
            <p>{data.Genre}</p>
            <p>{data.Awards}</p>
            <p>{data.Actors}</p>

            <p>{data.imdbRating}</p>
          </div>
          <div className="image_container">
            <img src={data.Poster} alt="hahahah" />
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetails;
