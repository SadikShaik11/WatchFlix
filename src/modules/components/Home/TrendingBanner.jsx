import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "../../Hooks/Api";

const TrendingBanner = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getTrendingMovies();
        setTrending(res?.results[0]);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchData();
  }, []);

  return trending ? (
    <div
      onClick={() => {
        window.location.href = `/movie/${trending.id}-${trending.title}`;
      }}
      className="relative mx-3"
    >
      <img
        className="xs:max-h-[250px] md:max-h-[450px] opacity-50 w-screen rounded-md"
        src={`${process.env.TMDB_IMG_URL}${trending.backdrop_path}`}
        alt={trending.title}
      />
      <div className="absolute top-1 left-1">
        <div className="flex flex-col text-white space-y-4 p-4 shadow-lg rounded-md">
          <span className="animate-text bg-gradient-to-r from-red-700 via-yellow-500 to-white bg-clip-text text-transparent xs:text-2xl  md:text-6xl font-black">
            {trending ? " #TRENDING AT 1" : ""}
          </span>
          <section className="flex flex-col space-y-3">
            <span className="md:text-5xl font-bold">
              <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent xs:text-xl  md:text-5xl font-black">
                {trending.title}
              </h1>
            </span>
            <span className=" xs:text-[10px] xs:overflow-hidden xs:line-clamp-5 xs:max-w[50%] md:text-xl max-w-[40%] ">
              {" "}
              {trending.overview}{" "}
            </span>
          </section>
        </div>
      </div>
    </div>
  ) : (
    <div className="xs:h-[250px] bg-gray-400 md:h-[450px] w-screen rounded-md"></div>
  );
};

export default TrendingBanner;
