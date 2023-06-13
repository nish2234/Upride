import React, { useEffect, useState } from "react";
import search from "../assets/search.png";
import add from "../assets/add.svg";
import ph from "../assets/Ellipse 4.png";
import hand from "../assets/🦆 emoji _waving hand_.png";
import art from "../assets/Artboard 02.png";
import Table from "./Table";
const API = "https://upride-internships-default-rtdb.firebaseio.com/.json";
function Rightnav() {
  const [activeBookings, setActiveBookings] = useState([]);
  const [completedBookings, setCompletedBookings] = useState([]);
  const [cancelledBookings, setCancelledBookings] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);

  const fetchUser = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      let temp = Object.values(data);
      temp = temp.map((item, index) => Object.values(item));
      temp = temp.flat();
      //console.log(temp);

      setActiveBookings(
        temp
          .filter((booking) => booking.bookingStatus === "SUCCESS")
          .sort((a, b) => a.bookingEpochTime - b.bookingEpochTime)
      );

      setCompletedBookings(
        temp
          .filter((booking) => booking.bookingStatus === "COMPLETED")
          .sort((a, b) => a.bookingEpochTime - b.bookingEpochTime)
      );

      setCancelledBookings(
        temp
          .filter((booking) => booking.bookingStatus === "CANCELLED")
          .sort((a, b) => a.bookingEpochTime - b.bookingEpochTime)
      );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUser(API);
  }, []);

  useEffect(() => {
    console.log("S", activeBookings);
    console.log("Comop", completedBookings);
    console.log("CAN", cancelledBookings);
  }, [activeBookings, completedBookings, cancelledBookings]);

  return (
    <>
      <div className="rightbox">
        <div className="r1">
          <div className="r1flex">
            <div className="search">
              <input type="text" placeholder="Search bookings" />
              <img src={search} alt="" />
            </div>
            <div className="add">
              <img src={add} alt="" />
              New Booking
            </div>
          </div>
          <div className="account">
            <img src={ph} alt="" />
            <p>Hello Lokesh!</p>
            <img src={hand} alt="" />
          </div>
        </div>
        <div className="r2">
          <div className="r2title">
            <p>View Bookings</p>
            <img src={art} alt="" />
          </div>
          <div className="buttons">
            <button
              type="button"
              className={tabIndex == 0 ? "decor" : ""}
              onClick={() => setTabIndex(0)}
            >
              Active
            </button>
            <button
              className={tabIndex == 1 ? "decor" : ""}
              type="button"
              onClick={() => setTabIndex(1)}
            >
              Completed
            </button>
            <button
              className={tabIndex == 2 ? "decor" : ""}
              type="button"
              onClick={() => setTabIndex(2)}
            >
              Cancelled
            </button>
          </div>
          <div className="table">
            {tabIndex === 0 ? <Table bookings={activeBookings} /> : <></>}
            {tabIndex === 1 ? <Table bookings={completedBookings} /> : <></>}
            {tabIndex === 2 ? <Table bookings={cancelledBookings} /> : <></>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Rightnav;
