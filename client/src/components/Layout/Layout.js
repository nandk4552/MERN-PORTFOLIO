import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import Menus from "../Menus/Menus";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri";
import "./Layout.css";
import { useTheme } from "../../context/ThemeContext";

const Layout = () => {
  const [toggle, setToggle] = useState(false);
  // change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar" : "sidebar-toggle sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <RiArrowLeftDoubleFill size="30" />
              ) : (
                <RiArrowRightDoubleFill size="30" />
              )}
            </p>
          </div>
          <Menus toggle={toggle} />
        </div>
        
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
