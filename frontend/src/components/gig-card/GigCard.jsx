import React from "react";
import "./GigCard.scss";

const GigCard = ({ item }) => {
  return (
    <div className="gig-card">
      <div className="container">
        <img src={item.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p className="desc">{item.desc}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="info-price">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span className="srt-at">STARTING AT</span>
            <span className="gp">$ {item.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigCard;
