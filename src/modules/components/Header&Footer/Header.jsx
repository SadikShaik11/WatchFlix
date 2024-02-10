import React from "react";
import logo from "../../images/logo.png";
import avatar from "../../images/profile.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  return (
    <div className="mx-3 md:space-x-15 mt-5 md:items-center md:mb-[30px] ms:flex md:flex-row xs:flex xs:flex-col xs:items-center xs:justify-center xs:text-xs md:text-lg sm:justify-evenly md:justify-evenly">
      <div
        className=""
        onClick={() => {
          window.location.href = "/";
        }}
        id="logo"
      >
        <img
          className="xs:h-[25px] xs:w-[175px] sm:h-[25px] sm:w-[150px] md:h-[50px] md:w-[200px]"
          src={logo}
          alt="WATCHFLIX"
        />
      </div>
      <div className="xs:hidden sm:hidden md:flex flex items-center justify-items-center text-martel-sans-xl text-white">
        <ul className="flex justify-center cursor-pointer space-x-3">
          <Link to="/">
            <li className="p-3">Home</li>
          </Link>
          <li className="p-3">TV Shows</li>
          <li className="p-3">Movies</li>
        </ul>
      </div>
      <div className="xs:hidden sm:hidden md:flex flex flex-row justify-center items-center">
        <SearchBar />
        <img
          src={avatar}
          alt="Profile"
          className="xs:h-8 xs:w-8 font-poppins border-1 border-rose-300 md:w-10 md:h-10 sm:w-10 sm:h-10"
        />
      </div>
      {/* Mobile-specific div - Hidden on md and larger screens */}
      <div className="md:hidden xs:flex items-center flex-col">
        <div className="flex flex-row">
          <SearchBar />
          <img
            src={avatar}
            alt="Profile"
            className="xs:h-8 xs:w-8 font-poppins border-1 border-rose-300 md:w-10 md:h-10 sm:w-10 sm:h-10"
          />
        </div>
        {/* Hidden on larger screens */}
        <div className="md:hidden flex items-center justify-items-end text-martel-sans-xl text-white">
          <ul className="flex cursor-pointer space-x-3">
            <Link to="/">
              <li className="p-3">Home</li>
            </Link>
            <li className="p-3">TV Shows</li>
            <li className="p-3">Movies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Navigate to the search results page using useNavigate
    // navigate(`/search?searchedItem=${encodeURIComponent(searchQuery)}`);
    window.location.href = `/search?searchedItem=${encodeURIComponent(
      searchQuery
    )}`;
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form
      action=""
      className="max-w-[380px] max-h-[180px] w-full px-4"
      onSubmit={handleSubmit}
    >
      <div className="relative">
        <input
          type="text"
          name="q"
          value={searchQuery}
          onChange={handleChange}
          className="w-full text-white bg-transparent border h-6 shadow p-4 border-red-900"
          placeholder="Search"
        />
      </div>
    </form>
  );
};
export default Header;
