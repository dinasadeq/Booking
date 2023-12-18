import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

import SearchItem from "../../components/SearchItem/SearchItem";

const List = () => {
  const location = useLocation();
  console.log();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState();
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState();
  console.log(destination);
  return (
    <div>
      <Navbar /> <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitles">Search</h1>

            <div className="lsItem">
              <label> Destination </label>
              <input placeholder="destination" type="text" />
            </div>

            <div className="lsItem">
              <label> Check-in Date </label>
              {/*
                 <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to 
                            ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>

            */}
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    min price
                    <small>per night </small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    max price
                    <small>per night </small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder="options.adult"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder="options.children"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder="options.room"
                  />
                </div>

                <button>search</button>
              </div>
              <div className="listResult"></div>

              <SearchItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default List;
