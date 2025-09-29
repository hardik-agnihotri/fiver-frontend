import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";

function CatCard({ item }) {
  return (
    <div className="catCard">
      <Link className="link" to="/gigs?cat=design">
        <img src={item.img} alt={item.title} />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </Link>
    </div>
  );
}
export default CatCard;
