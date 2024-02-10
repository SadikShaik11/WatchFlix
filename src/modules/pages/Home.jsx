import React from "react";
import Header from "../components/Header&Footer/Header";
import MasterCard from "../components/banner/MasterCard";
import HomeComponent from "../components/Home/HomeComponent";
import Footer from "../components/Header&Footer/Footer";
const Home = () => {
  return (
    <div>
      <Header />
      <body className="min-w-screen mb-5">
        <HomeComponent />
      </body>
      <Footer />
    </div>
  );
};

export default Home;
