// file Ticket.jsx
import React, { useState } from 'react';
import './Ticket.css';

const Ticket = () => {
  const [adultTicketCount, setAdultTicketCount] = useState(0);
  const [studentTicketCount, setStudentTicketCount] = useState(0);
  const [childrenTicketCount, setChildrenTicketCount] = useState(0);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const adultTicketPrice = 100;
  const studentTicketPrice = 50;
  const childrenTicketPrice = 25;

  const handleAddAdultTicket = () => {
    setAdultTicketCount(adultTicketCount + 1);
  };

  const handleSubtractAdultTicket = () => {
    if (adultTicketCount > 0) {
      setAdultTicketCount(adultTicketCount - 1);
    }
  };

  const handleAddStudentTicket = () => {
    setStudentTicketCount(studentTicketCount + 1);
  };

  const handleSubtractStudentTicket = () => {
    if (studentTicketCount > 0) {
      setStudentTicketCount(studentTicketCount - 1);
    }
  };

  const handleAddChildrenTicket = () => {
    setChildrenTicketCount(childrenTicketCount + 1);
  };

  const handleSubtractChildrenTicket = () => {
    if (childrenTicketCount > 0) {
      setChildrenTicketCount(childrenTicketCount - 1);
    }
  };

  const totalPrice =
    adultTicketCount * adultTicketPrice +
    studentTicketCount * studentTicketPrice +
    childrenTicketCount * childrenTicketPrice;

  const handleBookTickets = () => {
    if (totalPrice > 0) {
      setPaymentSuccessful(true);
      alert('Payment Successful!' + 'Rp,' + totalPrice + ',000.00');
    }
  };

  return (
    <div>
      <div className="banner-container">
        <img className="banner-image" src={require("../Ticket/Ticket-Banner.png")} alt="Ticket Banner" />
      </div>

      <div className="grid-container">
        <div></div> {/* Bagian kiri */}
        <div>
          <table className="custom-table">
            <thead>
              <tr>
                <th>TICKET BOOK</th>
                <th>PRICE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Adult (> 21 years old)</td>
                <td>Rp. 100,000.00</td>
                <td>
                  <div className="ticket-controls">
                    <button className="ticket-button" onClick={handleSubtractAdultTicket}>
                      -
                    </button>
                    <span className="ticket-count">{adultTicketCount}</span>
                    <button className="ticket-button" onClick={handleAddAdultTicket}>
                      +
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Student (13-21 years old)</td>
                <td>Rp. 50,000.00</td>
                <td>
                  <div className="ticket-controls">
                    <button className="ticket-button" onClick={handleSubtractStudentTicket}>
                      -
                    </button>
                    <span className="ticket-count">{studentTicketCount}</span>
                    <button className="ticket-button" onClick={handleAddStudentTicket}>
                      +
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Children (7-12 years old)</td>
                <td>Rp. 25,000.00</td>
                <td>
                  <div className="ticket-controls">
                    <button className="ticket-button" onClick={handleSubtractChildrenTicket}>
                      -
                    </button>
                    <span className="ticket-count">{childrenTicketCount}</span>
                    <button className="ticket-button" onClick={handleAddChildrenTicket}>
                      +
                    </button>
                  </div>
                </td>
              </tr>
              <tr style={{ borderTop: '0.5px solid black', borderBottom: '0.5px solid black' }}>
                <td>Total Price</td>
                <td></td>
                <td>Rp. {totalPrice},000.00</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <button className="book-button" onClick={handleBookTickets}>
                    Book
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div> {/* bagian kanan */}
      </div>
    </div>
  );
};

export default Ticket;
