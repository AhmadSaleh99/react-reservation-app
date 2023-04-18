import React from "react";
import "./MailList.css";
const MailList = () => {
  return (
    <div className="mail__list">
      <h1 className="mail__list-title">Save time, and save money!</h1>
      <span className="mail__list-description">
        Sign up and we'll send the best deals for you
      </span>
      <div className="mail__list-input__container">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
