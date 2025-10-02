import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import img from "../../assets/user.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [profileDrop, setprofileDrop] = useState(false);
  const [active, setActive] = useState(false);
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Hardik",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active " : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="logo-txt link">
            ziGGLer
          </Link>
          <span className="logo-dot">.</span>
        </div>
        <div className="links">
          <span>ziGGLer Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser && <span>Sign In</span>}
          {!currentUser?.isSeller && <span>Become a sellar</span>}
          {!currentUser && (
            <button className={active ? "btn-chg" : ""}>Join</button>
          )}
          {currentUser && (
            <div
              className="user"
              onClick={() => setprofileDrop((prev) => !prev)}
            >
              <img src={img} alt="" />
              <span>{currentUser.username}</span>
              {profileDrop && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <span>
                        <Link to="/my-gigs" className="link">
                          Gigs
                        </Link>
                      </span>
                      <span>
                        <Link to="/add" className="link">
                          Add new Gig
                        </Link>
                      </span>
                    </>
                  )}
                  <span>
                    <Link to="/orders" className="link">
                      Orders
                    </Link>
                  </span>
                  <span>
                    <Link to="/messages" className="link">
                      Messages
                    </Link>
                  </span>
                  <span>Logout</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active ||
        (pathname !== "/" && (
          <>
            <hr />
            <div className="menu">
              <Link to="/" className="link">
                Web Development
              </Link>
              <Link to="/" className="link">
                Graphic Design
              </Link>
              <Link to="/" className="link">
                Digital Marketing
              </Link>
              <Link to="/" className="link">
                Writing & Translation
              </Link>
              <Link to="/" className="link">
                Video Editing
              </Link>
              <Link to="/" className="link">
                Data Entry
              </Link>
            </div>
            <hr />
          </>
        ))}
    </div>
  );
};

export default Navbar;
