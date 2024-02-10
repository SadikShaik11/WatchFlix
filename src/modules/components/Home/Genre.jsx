import React from "react";
import { GENRE_IMG, GENRE } from "../../data/Genre";

const Genre = () => {
  {
    console.log(GENRE_IMG);
    GENRE_IMG.map((genre, index) => (
      <div className="flex flex-col text-white" key={index}>
        <img className="max-h-l max-w-l" src={genre} alt={GENRE[index]} />
        <span>{GENRE[index]}</span>
      </div>
    ));
  }
};

export default Genre;
