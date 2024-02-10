import React from "react";

const CreditDetailsCard = ({ cast, crew, movie }) => {
  if (cast && cast.length > 5) {
    cast = cast.slice(0, 5);
  }
  if (crew && crew.length > 5) {
    crew = crew.slice(0, 5);
  }
  console.log(movie.genres);
  const genres = movie.genres;
  return (
    <div className="">
      <div className="xs:flex-col flex font-martel-sans-Black md:flex-row  justify-evenly">
        <div className="xs:max-w-screen text-white space-y-3 flex flex-col md:max-w-[20%]">
          <span className="text-2xl font-martel-sans-Black  text-red-600 bold overflow-ellipsis">
            {movie.title}
          </span>
          <span className="text-sm overflow-ellipsis">{movie.overview}</span>
          <span className=" text-yellow-500">
            <div>
              Genres:{" "}
              {genres &&
                genres.map((genre) => (
                  <span className="text-white  text-sm" key={genre.id}>
                    {genre.name},{" "}
                  </span>
                ))}
            </div>
            <div>
              Runtime :
              <span className="text-white text-sm ">{movie.runtime} mins</span>
            </div>
            <div>
              Languages:{" "}
              {movie.spoken_languages &&
                movie.spoken_languages.map((language) => (
                  <span className="text-white text-sm " key={language.id}>
                    {language.name},{" "}
                  </span>
                ))}
            </div>
          </span>
        </div>
        <div className="xs:max-w-screen text-white md:max-w-[30%] text-sm">
          {cast &&
            cast.map((item) => {
              return (
                <div key={item.id} className="flex items-center mt-4">
                  <img
                    src={`${process.env.TMDB_IMG_URL}${item.profile_path}`}
                    className="font-poppins border-1 mr-2 border-rose-300 w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                    alt={item.orginal_name}
                  />
                  <span>
                    {item.name} : {item.original_name}
                  </span>
                </div>
              );
            })}
        </div>
        <div className="xs:max-w-screen text-white md:max-w-[30%] text-sm ">
          {crew &&
            crew.map((item) => {
              return (
                <div key={item.id} className="flex items-center mt-4">
                  <img
                    src={`${process.env.TMDB_IMG_URL}${item.profile_path}`}
                    className="font-poppins border-1 mr-2  border-rose-300 w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                    alt={item.orginal_name}
                  />
                  <span className="">
                    {item.job} : {item.original_name}
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CreditDetailsCard;
