import React, { useState } from "react";
import Header from "../components/Header";
import MasterCard from "../components/banner/MasterCard";
import { useParams } from "react-router-dom";
import SimilarMoviesComponent from "../components/Home/SimilarMoviesComponent";
import UpcomingMoviesComponent from "../components/Home/UpcomingMoviesComponent";
import CastNCrew from "../components/Home/CastNCrew";

const MovieDetails = () => {
  const { id } = useParams();
  return (
    <div className="m-[2%] space-y-5 justify-center">
      <Header />
      <MasterCard id={id} />
      <CastNCrew id={id} />
      <SimilarMoviesComponent id={id} />
      <UpcomingMoviesComponent />
    </div>
  );
};

export default MovieDetails;
