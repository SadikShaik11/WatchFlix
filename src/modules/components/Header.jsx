import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="mt-5 items-center mb-[30px] justify-evenly flex row">
      <div className="" id="logo">
        <img className=" h-[50px] w-[150px]" src={logo} alt="WATCHFLIX" />
      </div>
      <div className="flex items-center justify-items-end  text-martel-sans-xl text-white">
        <ul className="flex cursor-pointer space-x-3">
          <Link to="/">
            <li className="p-3">Home</li>
          </Link>
          <li className="p-3">TV Shows</li>
          <li className="p-3">Movies</li>
        </ul>
      </div>
      <div className="flex items-center flex-row">
        <SearchBar />
        <img
          src={logo}
          alt="Profile"
          className="font-poppins border-1 border-rose-300 w-8 h-8 sm:w-10 sm:h-10 rounded-full"
        />
      </div>
    </div>
  );
};
const SearchBar = () => {
  return (
    <div className="">
      <form
        action="/search"
        className="max-w-[380px] max-h-[180px] w-full px-4"
      >
        <div className="relative">
          <input
            type="text"
            name="q"
            className="w-full bg-transparent border h-6 shadow p-4 rounded-full border-red-900 "
            placeholder="Search"
          />
          {/* <button type="submit">
            <svg
              className="text-red-400 h-4 w-4 absolute top-1.5 right-3 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>
            </svg>
          </button> */}
        </div>
      </form>
    </div>
  );
};
export default Header;
