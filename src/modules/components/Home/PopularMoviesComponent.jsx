import React from "react";
import { useState, useEffect } from "react";
import { getMovies } from "../../Hooks/Api";
import Carousel from "./moviesCarousel/CarousalComponent";
const PopularMoviesComponent = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const data = async () => {
      const res = await getMovies();
      setMoviesList(res.results);
    };
    data();
  }, []);
  return (
    <div className="">
      <h1 className="font-martel-sans pb-3 bold text-xl text-white">
        {" "}
        Popular movies
      </h1>
      <Carousel movies={moviesList} />
    </div>
  );
};

export default PopularMoviesComponent;
