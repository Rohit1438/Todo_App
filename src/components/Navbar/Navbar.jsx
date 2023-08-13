import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div  id="nav-menu">
      <div className="navImage">
        <h1 style={{ color: "#CF12DD" }}>
          R<span style={{ color: "white" }}>|</span>
          <span style={{ color: "#CF12DD" }}>B</span>{" "}
        </h1>
      </div>
      <div>
        <Link  to={"about"}>
          About
        </Link>
        <Link  to={"projects"}>
          Projects
        </Link>
        <Link  to="education">
          Skills
        </Link>
      </div>
      
    </div>
  );
};




export default Navbar