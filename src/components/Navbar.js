import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="center">
        <NavLink exact="true" to="/" activeclassname="active" className="links">
          Work
        </NavLink>
        <NavLink to="/about" activeclassname="active" className="links">
          About
        </NavLink>
        <NavLink to="/resume" activeclassname="active" className="links">
          Resume
        </NavLink>
      </div>
      <div className="right">
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/fluency/40/linkedin-circled.png"
            alt="linkedin-circled"
          />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/sf-regular-filled/40/FFFFFF/github.png"
            alt="github"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
