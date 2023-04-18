import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Header.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import format from "date-fns/format";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    childrens: 0,
    room: 1,
  });
  const navigate = useNavigate();

  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "header__container listMode" : "header__container"
        }
      >
        <div className="header__list">
          <div className="header__list-item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="header__list-item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="header__list-item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rental</span>
          </div>
          <div className="header__list-item">
            <FontAwesomeIcon icon={faBed} />
            <span>Atractions</span>
          </div>
          <div className="header__list-item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="header__title">
              A lifetime of discount? It's Genius.
            </h1>
            <p className="header__description">
              Get rewarded for your travel - unlock instant savings of 10% or
              more with a free SALEH RESERVATION APP account
            </p>
            <button className="header__button">Sign in / Register</button>
            <div className="header__search">
              <div className="header__search-item">
                <FontAwesomeIcon icon={faBed} className="header__search-icon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="header__search-input"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="header__search-item">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="header__search-icon"
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="header__search-text"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>

                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                    className="date"
                  />
                )}
              </div>
              <div className="header__search-item">
                <FontAwesomeIcon
                  icon={faPerson}
                  className="header__search-icon"
                />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="header__search-text"
                >
                  {`${options.adults} adults . ${options.childrens} childrens . ${options.room} rooms`}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="options__item">
                      <span className="options__item-text">Adults</span>
                      <div className="options__counter">
                        <button
                          disabled={options.adults <= 1}
                          className="options__counter-button"
                          onClick={() => handleOptions("adults", "d")}
                        >
                          -
                        </button>
                        <span className="options__counter-number">
                          {options.adults}
                        </span>
                        <button
                          className="options__counter-button"
                          onClick={() => handleOptions("adults", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="options__item">
                      <span className="options__item-text">Childrens</span>
                      <div className="options__counter">
                        <button
                          disabled={options.childrens <= 0}
                          className="options__counter-button"
                          onClick={() => handleOptions("childrens", "d")}
                        >
                          -
                        </button>
                        <span className="options__counter-number">
                          {options.childrens}
                        </span>
                        <button
                          className="options__counter-button"
                          onClick={() => handleOptions("childrens", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="options__item">
                      <span className="options__item-text">Rooms</span>
                      <div className="options__counter">
                        <button
                          disabled={options.room <= 1}
                          className="options__counter-button"
                          onClick={() => handleOptions("room", "d")}
                        >
                          -
                        </button>
                        <span className="options__counter-number">
                          {options.room}
                        </span>
                        <button
                          className="options__counter-button"
                          onClick={() => handleOptions("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="header__search-item">
                <button className="header__button" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
