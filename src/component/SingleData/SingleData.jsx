import React from "react";
import "./SingleData.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark} from "@fortawesome/free-solid-svg-icons";

const SingleData = (props) => {
  const { cover, name, img, title } = props.singledata;
  const  handleAddToBookmark= props.handleAddToBookmark;


 

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

        <div>
          <p onClick={()=>handleAddToBookmark(props.singledata)}>5 min to read <FontAwesomeIcon icon={faBookmark} /></p>
        </div>
      </div>

      <h3>{title}</h3>
      <div className="taging">
        <p className="firsttag">#beginers</p>
        <p>#programing</p>
      </div>
      <a href="">Mark as read..</a>
    </div>
  );
};

export default SingleData;
