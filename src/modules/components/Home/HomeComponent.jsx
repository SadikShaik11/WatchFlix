import PopularMoviesComponent from "./PopularMoviesComponent";
import TopRatedMoviesComponent from "./TopRatedMoviesComponent";
import UpcomingMoviesComponent from "./UpcomingMoviesComponent";
import Genre from "./Genre";
import TrendingBanner from "./TrendingBanner";

const HomeComponent = () => {
  return (
    <div className="xs:space-y-6 sm:space-y-6  pt-7">
      <TrendingBanner />
      <PopularMoviesComponent />
      <TopRatedMoviesComponent />
      <UpcomingMoviesComponent />
      {/* <Genre /> */}
    </div>
  );
};

export default HomeComponent;
