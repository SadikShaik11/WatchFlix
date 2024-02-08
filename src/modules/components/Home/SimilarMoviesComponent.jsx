import React from "react";
import { useState, useEffect } from "react";
import { getSimilarMovies } from "../../Hooks/Api";
import Carousel from "./moviesCarousel/CarousalComponent";

const SimilarMoviesComponent = ({ id }) => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const data = async () => {
      const res = await getSimilarMovies(id);
      console.log(" similar movies", res);
      setMoviesList(res.results);
    };
    data();
  }, []);

  {
    return moviesList && moviesList.length > 0 ? (
      <div className="">
        <h1 className="font-martel-sans pb-3 bold text-xl text-white">
          {" You May Also Like"}
        </h1>
        <Carousel movies={moviesList} />
      </div>
    ) : (
      <></>
    );
  }
};

export default SimilarMoviesComponent;
