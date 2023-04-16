import React from "react";
import "../Cart/Cart.css";

const BookMarks = ({ bookMarks,totalTime }) => {

  return (
    <div className="cart">
      <h3> Spent time on read = {totalTime > 0 && `${totalTime} min`} </h3>
      <h3>bookmark Blog: {bookMarks?.length} </h3>
      {bookMarks &&
        bookMarks?.map((blog, index) => <p key={index}>{blog.title}</p>)}
    </div>
  );
};

export default BookMarks;
