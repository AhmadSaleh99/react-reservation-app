import React from "react";
import "./PropertyList.css";
const PropertyList = () => {
  return (
    <div className="property__list">
      <div className="property__list-item">
        <img
          src="https://media.cntraveler.com/photos/5ea7bd07f7f62f00085493e1/16:9/w_2580,c_limit/AmanKyoto-Japan-Hotel-2020-2.jpg"
          alt=""
          className="property__list-img"
        />
        <div className="property__list-titles">
          <h1>Hotels</h1>
          <h2>255 hotels</h2>
        </div>
      </div>
      <div className="property__list-item">
        <img
          src="https://www.casagrand.co.in/wp-content/uploads/2022/04/aquene-featured-1.jpg?ver=1.200"
          alt=""
          className="property__list-img"
        />
        <div className="property__list-titles">
          <h1>Apartments</h1>
          <h2>255 hotels</h2>
        </div>
      </div>
      <div className="property__list-item">
        <img
          src="https://r1imghtlak.mmtcdn.com/n5vkco7hfh59r96ha99c6jja002t.jpg?&output-quality=75&downsize=583:388&crop=583:388;0,27&output-format=jpg"
          alt=""
          className="property__list-img"
        />
        <div className="property__list-titles">
          <h1>Resorts</h1>
          <h2>255 hotels</h2>
        </div>
      </div>
      <div className="property__list-item">
        <img
          src="https://is1-2.housingcdn.com/4f2250e8/dea0a921ed12b2501d2d378d2e06de38/v0/fs/elevate_villas-shamshabad-hyderabad-ira_realty.jpeg"
          alt=""
          className="property__list-img"
        />
        <div className="property__list-titles">
          <h1>Villas</h1>
          <h2>255 hotels</h2>
        </div>
      </div>
      <div className="property__list-item">
        <img
          src="https://www.glamping.com/static/media/uploads/property/dunton%20hot%20springs/01-dolores-honeymoon.jpg"
          alt=""
          className="property__list-img"
        />
        <div className="property__list-titles">
          <h1>Cabins</h1>
          <h2>255 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
