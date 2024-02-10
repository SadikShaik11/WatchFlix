import React, { useEffect } from "react";
import Header from "../components/Header&Footer/Header";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../Hooks/Api";
import { useState } from "react";
import MovieUtilCard from "../Hooks/MovieCrad.util";
import Footer from "../components/Header&Footer/Footer";
const SearchedItems = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [queryParameters] = useSearchParams();
  const searchedItem = queryParameters.get("searchedItem");
  const page = queryParameters.get("page");
  useEffect(() => {
    async function data() {
      const result = await searchMovies(searchedItem, page ? page : 1);
      console.log(result);
      setSearchedMovies(result.results);
    }
    data();
  }, []);

  return (
    <div>
      <div>
        <div className="text-lg mb-4  text-white">
          {" "}
          Movies matches your search "{searchedItem}""
        </div>
        {searchMovies && searchMovies.length > 0 ? (
          <div className=" grid xs:grid-cols-3 sm:grid-cols6 md:grid-cols-8">
            {searchedMovies.map((movie) => (
              <MovieUtilCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          // <div>
          //   {searchedMovies.map((movie) => (
          //     <>
          //       {" "}
          //       <h1>{movie.title}</h1>
          //     </>
          //   ))}
          // </div>
          <></>
        )}
      </div>
    </div>
  );
};

const SearchPage = () => {
  return (
    <div>
      <Header />
      <body className="min-w-screen">
        <SearchedItems />
      </body>
      <Footer />
    </div>
  );
};

export default SearchPage;
