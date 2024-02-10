import React from "react";

import { Link } from "react-router-dom";
const MovieUtilCard = ({ movie }) => {
  return (
    <div key={movie.id}>
      <Link to={`/movie/${movie.id}-${movie.title}`}>
        <MovieCard movie={movie} />
      </Link>
    </div>
  );
};
export const MovieCard = ({ movie }) => {
  return (
    <div className="mx-3 flex space-y-3 mb-2 flex-col items-center justify-center">
      <img
        className="@screen xs:max-h-[150px] xs:max-w-[130px]  md:max-h-[150px] md:max-w-[560px] lg:max-w-[560px] object-cover"
        src={`${process.env.TMDB_IMG_URL}${movie.poster_path}`}
        alt=""
      />
      <span className="text-white xs:text-xs md:text-sm xs:max-w-[80px] md:max-w-[160px] justify-center items-center  line-clamp-2">
        {movie.title}
      </span>
    </div>
  );
};

export default MovieUtilCard;
