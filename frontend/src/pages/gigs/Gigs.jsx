import React, { useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gig-card/GigCard";
import { gigs } from "../../utils/data";
// const gig= gigs[0];
const GigCat = () => {
  const [openSort, setOpenSort] = useState(false);
  const [sortvalue, setSortvalue] = useState("Newest");
  return (
    <div className="gig-cat-pg">
      <div className="container">
        <span className="breadcrumb">
          FIVER {">"} GRAPHICS & DESIGN {">"}
        </span>
        <div className="details">
          <h1>AI Artists</h1>
          <p>
            Explore the boundaries of art and technology with Fiver's AI artists
          </p>
        </div>
        <div className="f-menu">
          <div className="bud-in">
            <span>budget:</span>
            <input type="text" className="min" placeholder="min" />
            <input type="text" className="max" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="sort">
            <span>Sort By: </span>
            <span>{sortvalue}</span>
            <img
              onClick={() => setOpenSort(!openSort)}
              src="./img/down.png"
              alt=""
            />
            {openSort && (
              <div className="drop">
                <span onClick={() => setSortvalue("Newest")}>Newest</span>
                <span onClick={() => setSortvalue("Best Selling")}>
                  Best Selling
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => {
            return <GigCard item={gig} key={gig.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default GigCat;
