import React from "react";

const seatBookImage = {
  backgroundImage: `url(../assets/img/event/seat-book.jpg)`,
};

function BookSeatForm() {
  return (
    <div className="seat-book-wrap bg-img mt-80 mb-50" style={seatBookImage}>
      <div className="seat-book-title text-center">
        <h3>Book Your Seat Now</h3>
        <p>
          natus error sit voluptatem accu antium dolorem laudantium, totam rem
          aperiam, eaque entore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div className="seat-book-form">
        <form>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <input placeholder="Name" type="text" />
            </div>
            <div className="col-lg-6 col-md-6">
              <input placeholder="Email" type="email" />
            </div>
            <div className="col-lg-6 col-md-6">
              <input name="name" placeholder="Date" type="text" />
            </div>
            <div className="col-lg-6 col-md-6">
              <input placeholder="Time" type="text" />
            </div>
            <div className="col-lg-12">
              <textarea placeholder="Message"></textarea>
              <button className="seat-book-btn" type="submit">
                BOOK NOW
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookSeatForm;
