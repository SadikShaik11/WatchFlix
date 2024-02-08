import React from "react";
import { useState, useEffect } from "react";
import { getUpcomingMovies } from "../../Hooks/Api";
import Carousel from "./moviesCarousel/CarousalComponent";
const UpcomingMoviesComponent = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const data = async () => {
      const res = await getUpcomingMovies();
      setMoviesList(res.results);
    };
    data();
  }, []);
  return (
    <div className="">
      <h1 className="font-martel-sans pb-3 bold text-xl text-white">
        {" "}
        Upcoming Movies
      </h1>
      <Carousel movies={moviesList} />
    </div>
  );
};

export default UpcomingMoviesComponent;
