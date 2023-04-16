import React, { useEffect, useState } from "react";
import "./Container.css";
import SingleData from "../../SingleData/SingleData";
import Cart from "../../Cart/Cart";
import BookMarks from "../../BookMarks/BookMarks";

const Container = () => {
  const [data, setData] = useState([]);
  const [bookMarks, setBookMarks] = useState([]);
  const [totalTime,setTotalTime] = useState(0);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const totalTimeHandler = (time) => {
    setTotalTime(prev=>prev+Number(time))
  };
  const handleAddToBookmark = (blog) => {
    setBookMarks((prev) => [blog, ...prev]);
  };

  return (
    <div className="container">
      <div className="blog-part">
        {data.map((singledata) => (
          <SingleData
          totalTimeHandler={totalTimeHandler}
            handleAddToBookmark={handleAddToBookmark}
            key={singledata.id}
            singledata={singledata}
          ></SingleData>
        ))}
      </div>

      <div className="bookmark-part" style={{ padding: 10 }}>
        <BookMarks bookMarks={bookMarks} totalTime={totalTime} />
      </div>
    </div>
  );
};

export default Container;
