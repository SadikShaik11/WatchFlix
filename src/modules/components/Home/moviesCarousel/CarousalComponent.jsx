import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./Carousal.css";
import { Link } from "react-router-dom";
import ShimmerCard from "../../../shimmer/shimmer-card/ShimmerMoviecard";
export default function Carousel({ movies }) {
  const [hoveredMovieId, setHoveredMovieId] = useState(null);

  const CustomPrevArrow = ({ onClick }) => (
    <button className="prev-arrow" onClick={onClick}></button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button className="next-arrow" onClick={onClick}></button>
  );

  const handleMouseEnter = (movieId) => {
    setHoveredMovieId(movieId);
  };

  const handleMouseLeave = () => {
    setHoveredMovieId(null);
  };

  const renderMovieCard = (movie) => {
    return (
      <div
        onMouseEnter={() => handleMouseEnter(movie.id)}
        onMouseLeave={handleMouseLeave}
        key={movie.id}
      >
        <Link to={`/movie/${movie.id}-${movie.title}`}>
          <MovieCard
            isHovered={hoveredMovieId === movie.id}
            handleMouseLeave={handleMouseLeave}
            movie={movie}
          />
        </Link>
      </div>
    );
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    centerMode: true,
    centerPadding: "0",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div>
      
      {movies && movies.length > 0 ? (
        <Slider className="m-1 cursor-pointer" {...settings}>
          {movies.map((movie) => renderMovieCard(movie))}
        </Slider>

      ) : (
  
        <Slider className="m-1 cursor-pointer" {...settings}>
          {[...Array(10)].map(item => <div key={item}><ShimmerCard/></div>)}
       </Slider>
      )}
    
    </div>
  );
}

const MovieCard = ({ movie, isHovered, handleMouseLeave }) => {
  return isHovered ? (
    <HoveredMovieCard handleMouseLeave={handleMouseLeave} movie={movie} />
  ) : (
    <div className="flex items-center justify-center">
      <img
        className="max-h-[300px] max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
        src={`${process.env.TMDB_IMG_URL}${movie.poster_path}`}
        alt=""
      />
    </div>
  );
};




const HoveredMovieCard = ({ movie, handleMouseLeave }) => {
  const cardStyle = {
    backgroundImage: `url(${process.env.TMDB_IMG_URL}${movie.poster_path})`,
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "300px",
    opacity: 0.7
  };

  const containerStyle = {
    width: "100%", 
    position: "relative",
  };

  const contentContainerStyle = {
    maxWidth: "100%", // Set your max width for content
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  };

  return (
<div className="bg-cover bg-center items-center w-full h-full relative" style={containerStyle} onMouseLeave={handleMouseLeave}>
  <div style={cardStyle} className="flex max-h-[300px] w-full bg-black shadow-md rounded-lg overflow-hidden">
    <div style={contentContainerStyle}>
      <div className="w-3 h-full  bg-transparent"></div>
      <div className=" overflow-hidden rounded-xl h-[500px] relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-3xl movie-item text-white movie-card" data-movie-id={movie.id}>
        <div className="flex max-h-full w-full h-full bg-transparent shadow-md rounded-lg overflow-hidden">
          <div className=" bg-transparent"></div>
          <div className="overflow-hidden pl-1 w-full h-full relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-3xl movie-item text-white movie-card" data-movie-id={movie.id}>
            <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
            <div className="relative cursor-pointer group z-10 pt-10 space-y-6 movie_info" data-lity="" href={`/movie/${movie.id}`}>
              <div className="space-y-6 detail_info w-full h-full">
                <div className="flex flex-col space-y-2 inner">
                      <a href={`/movie/${movie.id}-${movie.title}`} className="relative flex items-center w-min flex-shrink-0 p-1 text-center text-white bg-red-500 rounded-full group-hover:bg-red-700" data-unsp-sanitized="clean">
                        <Link to={`/movie/${movie.id}-${movie.title}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z" clipRule="evenodd"></path>
                    </svg>
                        </Link>     
                    <div className="absolute transition opacity-0 duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-x-16 text-xl font-bold text-white group-hover:pr-2">
                      Trailer
                    </div>
                  </a>
                  <h3 className="text-l font-bold text-white overflow-hidden overflow-ellipsis" data-unsp-sanitized="clean">
                    {movie.title}
                  </h3>
                  <div className="mb-0 text-lg text-gray-400">
                    {movie.tagline}
                  </div>
                </div>
                <div className="flex flex-col justify-between datos">
                  <div className="flex  flex-col datos_col">
                    <div className="text-l bold text-yellow-400">Popularity:</div>
                    <div className="popularity">{movie.popularity}</div>
                  </div>
                  <div className="flex pt-2 flex-col datos_col">
                    <div className="text-l bold bold text-yellow-400 ">Release date:</div>
                    <div className="release">{movie.release_date ? movie.release_date:'N/A'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </div>
  </div>
</div>

  );
};

export default HoveredMovieCard;
