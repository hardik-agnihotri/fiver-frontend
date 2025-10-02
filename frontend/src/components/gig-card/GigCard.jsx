import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";

const GigCard = ({ item }) => {
  return (
    <div className="gig-card">
      <Link className="card-link link">
        <div className="container-card">
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
      </Link>
    </div>
  );
};

export default GigCard;
