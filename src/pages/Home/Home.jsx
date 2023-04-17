import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Featured from "../../components/Featured/Featured";
import "./Home.css";
import PropertyList from "../../components/PropertyList/PropertyList";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <div className="home__container">
        <Featured />
        <h1 className="home__title">Browse by property!</h1>
        <PropertyList />
        <h1 className="home__title">Properties guestes love!</h1>
        <FeaturedProperties />
      </div>
    </div>
  );
};

export default Home;
