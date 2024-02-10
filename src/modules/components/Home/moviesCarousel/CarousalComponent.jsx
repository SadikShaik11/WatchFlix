import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./Carousal.css";
import { Link } from "react-router-dom";
import ShimmerCard from "../../../shimmer/shimmer-card/ShimmerMoviecard";
export default function Carousel({ movies }) {
  const [hoveredMovieId, setHoveredMovieId] = useState(null);

  const CustomPrevArrow = ({ onClick }) => (
    <div
      className=" xs:bg-slate-400 xs:text-black xs:max-h-[200px] xs:p-[5px] prev-arrow"
      onClick={onClick}
    ></div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div className=" xs:max-h-[200px] next-arrow" onClick={onClick}></div>
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
    slidesToShow: 12,
    centerMode: true,
    centerPadding: "0",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 9,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 8,
        },
      },
    ],
  };

  return (
    <div>
      {movies && movies.length > 0 ? (
        <Slider
          className="@screen xs:max-w-screen m-1 cursor-pointer"
          {...settings}
        >
          {movies.map((movie) => renderMovieCard(movie))}
        </Slider>
      ) : (
        <Slider
          className="@screen xs:max-w-screen m-1 cursor-pointer"
          {...settings}
        >
          {[...Array(10)].map((item, index) => (
            <div key={index}>
              <ShimmerCard />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export const MovieCard = ({ movie, isHovered, handleMouseLeave }) => {
  return isHovered ? (
    <HoveredMovieCard handleMouseLeave={handleMouseLeave} movie={movie} />
  ) : (
    <div className="flex items-center justify-center">
      <img
        className="@screen xs:max-h-[150px] xs:max-w-[130px]  md:max-h-[150px] md:max-w-[560px] lg:max-w-[560px] object-cover"
        src={`${process.env.TMDB_IMG_URL}${movie.poster_path}`}
        alt=""
      />
    </div>
  );
};

export const HoveredMovieCard = ({ movie, handleMouseLeave }) => {
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
    opacity: 0.7,
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
    <div
      className="@screen xs:max-h-[150px] xs:max-w-[150px] sm:text-sm md:max-h-[300px] sm:max-w-full md:text-l  bg-cover bg-center items-center md:w-full md:h-full relative"
      style={containerStyle}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={cardStyle}
        className="flex max-h-[300px] w-full bg-black shadow-md rounded-lg overflow-hidden"
      >
        <div style={contentContainerStyle}>
          <div className="w-3 h-full  bg-transparent"></div>
          <div
            className=" overflow-hidden rounded-xl h-[500px] relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-3xl movie-item text-white movie-card"
            data-movie-id={movie.id}
          >
            <div className="flex max-h-full w-full h-full bg-transparent shadow-md rounded-lg overflow-hidden">
              <div className=" bg-transparent"></div>
              <div
                className="sm:p-0 overflow-hidden pl-1 w-full h-full relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-3xl movie-item text-white movie-card"
                data-movie-id={movie.id}
              >
                <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
                <div
                  className="relative cursor-pointer group z-10 pt-10 space-y-6 movie_info"
                  data-lity=""
                  href={`/movie/${movie.id}`}
                >
                  <div className="space-y-6 detail_info w-full h-full">
                    <div className="flex flex-col space-y-2 inner">
                      <a
                        onClick={() => {
                          window.location.href = `/movie/${movie.id}-${movie.title}`;
                        }}
                        className="relative flex items-center w-min flex-shrink-0 p-1 text-center text-white bg-red-500 rounded-full group-hover:bg-red-700"
                        data-unsp-sanitized="clean"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-10 h-10"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z"
                            clipRule="evenodd"
                          ></path>
                        </svg>

                        <div className="sm:text-sm md:text-md absolute transition opacity-0 duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-x-16 text-xl font-bold text-white group-hover:pr-2">
                          Trailer
                        </div>
                      </a>
                      {/* </Link> */}
                      <h3
                        className="xs:text-sm md:text-l  font-bold text-white overflow-hidden overflow-ellipsis"
                        data-unsp-sanitized="clean"
                      >
                        {movie.title}
                      </h3>
                      <div className="mb-0 text-lg text-gray-400">
                        {movie.tagline}
                      </div>
                    </div>
                    <div className="flex flex-col justify-between datos">
                      <div className="flex  flex-col datos_col">
                        <div className="text-l bold text-yellow-400">
                          Popularity:
                        </div>
                        <div className="popularity">{movie.popularity}</div>
                      </div>
                      <div className="flex pt-2 flex-col datos_col">
                        <div className="text-l bold bold text-yellow-400 ">
                          Release date:
                        </div>
                        <div className="release">
                          {movie.release_date ? movie.release_date : "N/A"}
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
    </div>
  );
};
