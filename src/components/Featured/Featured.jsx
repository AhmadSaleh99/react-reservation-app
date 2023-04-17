import React from "react";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="featured__item">
        <img
          src="https://assets.cntraveller.in/photos/633138af67d00ef33fe822fd/16:9/pass/view-of-the-liffey-from-liberty-hall-dublin-ireland-conde-nast-traveller-4feb16-Tara-Morgan.jpg"
          alt="Dublin"
          className="featured__img"
        />
        <div className="featured__titles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featured__item">
        <img
          src="https://www.travelandleisure.com/thmb/3qRqN-So-YN1f9ws4mW-eGRQ2wU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/skyline-river-austin-texas-ATXTHINGS0122-4f095568988a408b8eadf93c530f1344.jpg"
          alt="Austin"
          className="featured__img"
        />
        <div className="featured__titles">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
      <div className="featured__item">
        <img
          src="https://www.visitrenotahoe.com/wp-content/uploads/2022/11/Reno-Winter-Skyline-HOMEPAGE-HEADER-1920x900.jpg"
          alt="Reno"
          className="featured__img"
        />
        <div className="featured__titles">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
