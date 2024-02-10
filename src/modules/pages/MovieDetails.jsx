import React, { useState } from "react";
import Header from "../components/Header&Footer/Header";
import MasterCard from "../components/banner/MasterCard";
import { useParams } from "react-router-dom";
import SimilarMoviesComponent from "../components/Home/SimilarMoviesComponent";
import UpcomingMoviesComponent from "../components/Home/UpcomingMoviesComponent";
import CastNCrew from "../components/Home/CastNCrew";
import Footer from "../components/Header&Footer/Footer";

const MovieDetails = () => {
  const { id } = useParams();
  return (
    <div className="@screen  m-[2%]  space-y-5 justify-center">
      <Header />
      <body className="min-w-screen mb-3">
        <MasterCard id={id} />
        <CastNCrew id={id} />
        <SimilarMoviesComponent id={id} />
        <UpcomingMoviesComponent />
      </body>

      <Footer />
    </div>
  );
};

export default MovieDetails;
