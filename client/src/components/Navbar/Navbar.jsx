import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import newRequest from "../../utils/newRequest";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 600 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div
        className={
          active || pathname !== "/"
            ? "navbar active bg-white flex"
            : "navbar flex"
        }
      >
        <div className="nav_container flex">
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
                <span className="talenttrade">TalentTrade</span>
              </Link>
            </div>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
          <div
            className={
              active
                ? `nav-links active  flex ${menuOpen ? "open" : ""}`
                : `nav-links flex ${menuOpen ? "open" : ""}`
            }
          >
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
            {!currentUser && (
              <>
                <Link className="link" to="/register">
                  <button>Join</button>
                </Link>
              </>
            )}

            {currentUser && (
              <div className="user flex" onClick={() => setOpen(!open)}>
                <img src={currentUser.img || "images/noavatar.jpg"} alt="" />
                <span className="link">{currentUser?.username}</span>
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
                    <Link className="link" onClick={handleLogout}>
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
