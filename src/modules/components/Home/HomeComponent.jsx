import React from "react";
import Carousel from "./moviesCarousel/CarousalComponent";
import PopularMoviesComponent from "./PopularMoviesComponent";
import TopRatedMoviesComponent from "./topRatedMoviesComponent";
import UpcomingMoviesComponent from "./UpcomingMoviesComponent";
const HomeComponent = () => {
  return (
    <div className="pt-7">
      <PopularMoviesComponent />
      <TopRatedMoviesComponent />
      <UpcomingMoviesComponent />
    </div>
  );
};

export default HomeComponent;
