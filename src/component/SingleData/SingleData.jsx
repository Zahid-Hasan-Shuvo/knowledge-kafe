import React from "react";
import "./SingleData.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const SingleData = (props) => {
  const { cover, name, img, title, time } = props.singledata;
  const handleAddToBookmark = props.handleAddToBookmark;
  const totalTimeHandler = props.totalTimeHandler;

  return (
    <div className="product">
      <img src={cover} alt="" />

      <div className="add-icon">
        <div>
          <div className="profile-img ">
            <div className="owner">
              <img src={img} alt="" />
              <div>
                <h4 className="name">{name}</h4>
                <p>Mar 14 (14 days ago)</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: 10 }}>
          <p>
            {time} min to read{" "}
            <span
              style={{ cursor: "pointer", fontSize: 20, marginLeft: 5 }}
              onClick={() => handleAddToBookmark(props.singledata)}
            >
              <FontAwesomeIcon icon={faBookmark} />
            </span>
          </p>
        </div>
      </div>

      <h3>{title}</h3>
      <div className="taging">
        <p className="firsttag">#beginers</p>
        <p>#programing</p>
      </div>
      <div>
        <p onClick={()=>totalTimeHandler(time)} style={{ cursor: "pointer", color: "blue" }}>Mark as read..</p>
      </div>
    </div>
  );
};

export default SingleData;
