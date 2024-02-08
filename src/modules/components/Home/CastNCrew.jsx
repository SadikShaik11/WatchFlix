import React from "react";
import { useState, useEffect } from "react";
import { fetchCastDetails, getMovieDetails } from "../../Hooks/Api";
import CreditDetailsCard from "./CreditDetailsCard";
const CastNCrew = ({ id }) => {
  const [peopleList, setPeopleList] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
  useEffect(() => {
    const data = async () => {
      const res = await fetchCastDetails(id);
      const movie = await getMovieDetails(id);
      setPeopleList(res);
      setMovieDetails(movie);
    };
    data();
  }, []);

  {
    return peopleList ? (
      <div className="">
        <h1 className="font-martel-sans pb-3 bold text-xl text-white">
          {" Details"}
        </h1>
        <CreditDetailsCard
          cast={peopleList.cast}
          crew={peopleList.crew}
          movie={movieDetails}
        />
      </div>
    ) : (
      <></>
    );
  }
};

export default CastNCrew;
