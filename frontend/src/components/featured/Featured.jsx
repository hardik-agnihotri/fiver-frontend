import React from "react";
import "./Featured.scss";
const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Find perfect freelance service for your business</h1>
          <div className="search">
            <div className="search-input">
              <img src="./img/search.png" alt="" />
              {/* implement useref to autofocus on the input box */}
              <input type="text" placeholder="Search by keyword" />
            </div>
            <button>Search</button>
          </div>
          <div className="pop-cat">
            <span>Popular:</span>
            <button>Wordpress</button>
            <button>React</button>
            <button>Web design</button>
            <button>Logo Design</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
