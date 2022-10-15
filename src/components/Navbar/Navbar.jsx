import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">
          Kishor <br />
          Academy
        </div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/courses">
                Courses
              </Link>
            </li>
            <li>
              <Link className="link" to="/workshop">
                Workshops
              </Link>
            </li>
            <li>
              <Link className="link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="link" to="/testimonial">
                Testimonial
              </Link>
            </li>
          </ul>
        </div>

        <a target="_blank" href="https://blog.kishor.academy/">
          <button className="button n-button">Blog</button>
        </a>
        {/* <Link to="/blog">
          <button className="button n-button">Blog</button>
        </Link> */}
      </div>
    </div>
  );
};

export default navbar;
