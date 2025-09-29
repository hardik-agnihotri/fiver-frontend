import React from "react";
import { Link } from "react-router-dom";
import "./ProjCard.scss";

function ProjCard({ item }) {
  return (
    <div className="ProjCard">
      <Link className="link" to="/">
        <img src={item.img} alt={item.title} />
        <div className="profile-pic">
          <img src={item.pp} alt="" />
        </div>

        <span className="desc">{item.username}</span>
        <span className="title">{item.cat}</span>
      </Link>
    </div>
  );
}
export default ProjCard;
