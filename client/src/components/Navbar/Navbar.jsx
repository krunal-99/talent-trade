import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Krunal Pokar",
    isFreelancer: true,
  };
  return (
    <>
      <div
        className={
          active || pathname !== "/" ? "navbar active flex" : "navbar flex"
        }
      >
        <div className="container flex">
          <div className="nav-logo flex">
            <div className="logo-img">
              <Link to="/" className="link">
                <img
                  className={active || pathname !== "/" ? "" : "filter"}
                  src="../images/logo-removebg-preview.png"
                  alt=""
                  width={50}
                  height={50}
                />
              </Link>
            </div>
            <div>
              <Link to="/" className="link">
                <span>TalentTrade</span>
              </Link>
            </div>
          </div>
          <div className="nav-links flex">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/contact" className="link">
              Contact Us
            </Link>
            <Link className="link" to="/gigs">
              Explore
            </Link>
            <Link to="/login" className="link">
              Sign in
            </Link>
            {!currentUser && <button>Join</button>}
            {currentUser && (
              <div className="user flex" onClick={() => setOpen(!open)}>
                <img src="./images/IMG_0501-02-01.jpeg" alt="" />
                <span>{currentUser?.username}</span>
                {open && (
                  <div className="options flex">
                    {currentUser?.isFreelancer && (
                      <>
                        <Link className="link" to="/mygigs">
                          Gigs
                        </Link>
                        <Link className="link" to="/add">
                          Add New Gig
                        </Link>
                      </>
                    )}
                    <Link className="link" to="/orders">
                      Orders
                    </Link>
                    <Link className="link" to="/messages">
                      Messages
                    </Link>
                    <Link className="link" to="/">
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {(active || pathname !== "/") && (
          <>
            <hr />
            <div className="menu flex">
              <Link className="link" to="/">
                Graphics & Design
              </Link>
              <Link className="link" to="/">
                Video & Animation
              </Link>
              <Link className="link" to="/">
                Writing & Translation
              </Link>
              <Link className="link" to="/">
                AI Services
              </Link>
              <Link className="link" to="/">
                Digital Marketing
              </Link>
              <Link className="link" to="/">
                Music & Audio
              </Link>
              <Link className="link" to="/">
                Programming & Tech
              </Link>
              <Link className="link" to="/">
                Business
              </Link>
              <Link className="link" to="/">
                Lifestyle
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
