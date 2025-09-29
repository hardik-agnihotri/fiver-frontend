import React from "react";
import { Link } from "react-router-dom";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import { cards,projects } from "../../utils/data";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/cat-card/CatCard";
import "./Home.scss";
import ProjCard from "../../components/proj-card/ProjCard";

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide title={"Browse By Category"} slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>
      <div className="feature">
        <div className="container">
          <div className="content">
            <div className="title">
              <h1>A whole world of freelance talent on you fingertips</h1>
            </div>
            <div className="points">
              <img src="./img/check.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                reprehenderit{" "}
              </p>
            </div>
            <div className="points">
              <img src="./img/check.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                reprehenderit{" "}
              </p>
            </div>
            <div className="points">
              <img src="./img/check.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                reprehenderit{" "}
              </p>
            </div>
            <div className="points">
              <img src="./img/check.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                reprehenderit{" "}
              </p>
            </div>
          </div>
          <div className="video">
            <video src="/img/vid.mp4" controls></video>
          </div>
        </div>
      </div>
      <div className="feature-2">
        <div className="container">
          <div className="content">
            <div className="title">
              <h1>
                <span className="bold">fiver</span> business
              </h1>
              <h1>
                <span className="bold">A business solution designed for </span>
                teams
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                repellat modi ipsa similique?
              </p>
            </div>
            <div className="pnt">
              <div className="points">
                <img src="./img/check.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  reprehenderit{" "}
                </p>
              </div>
              <div className="points">
                <img src="./img/check.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  reprehenderit{" "}
                </p>
              </div>
              <div className="points">
                <img src="./img/check.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  reprehenderit{" "}
                </p>
              </div>
            </div>

            <button className="b-btn">Explore Fiver Business </button>
          </div>
          <div className="img">
            <img
              src="https://freelancinglabs.com/wp-content/uploads/2022/06/fiverr-homepage-imac-1536x960.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={5} title={"projects"} arrowsScroll={5}>
        {projects.map((project) => (
          <ProjCard item={project} key={project.id} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
