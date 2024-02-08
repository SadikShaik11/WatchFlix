import React from "react";
import { useState, useEffect } from "react";
import { getTopRatedMovies } from "../../Hooks/Api";
import Carousel from "./moviesCarousel/CarousalComponent";
const TopRatedMoviesComponent = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const data = async () => {
      const res = await getTopRatedMovies();
      setMoviesList(res.results);
    };
    data();
  }, []);
  return (
    <div className="">
      <h1 className="font-martel-sans pb-3 bold text-xl text-white">
        {" "}
        Top Rated Movies
      </h1>
      <Carousel movies={moviesList} />
    </div>
  );
};

export default TopRatedMoviesComponent;
