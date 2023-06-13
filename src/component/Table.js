import React, { useState } from "react";

function formatDate(timestamp) {
  const date = new Date(timestamp);

  const options = { year: "numeric", month: "short", day: "2-digit" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}

function Table({ bookings }) {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentBookings = bookings.slice(startIndex, endIndex);

  const totalPages = Math.ceil(bookings.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <table>
        <thead>
          <tr className="table-head">
            <th>Name</th>
            <th>Date</th>
            <th>Package Details</th>
            <th>Payment Mode</th>
          </tr>
        </thead>
        <tbody>
          {currentBookings.map((booking) => (
            <tr key={booking.bookingID}>
              <td className="table-item">
                <div className="item-name">
                  <img
                    src={booking.workshopImage}
                    width={30}
                    height={30}
                    alt=""
                  />
                  <span> {booking.clientName}</span>
                </div>
              </td>
              <td className="table-item">
                {formatDate(booking.bookingEpochTime)}
              </td>
              <td className="table-item">{booking.packageTitle}</td>
              <td className="table-item">
                <div id={booking.offlineBooking ? "gre" : "yel"}>
                  {booking.offlineBooking
                    ? "Offline Payment"
                    : "Online Payment"}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={currentPage === pageNumber ? "active" : ""}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </>
  );
}

export default Table;
