import React from "react";
import {
  FcAbout,
  FcHome,
  FcPortraitMode,
  FcBiotech,
  FcReading,
  FcVideoProjector,
  FcContacts,
} from "react-icons/fc";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import "./Menus.css";
const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <motion.img
              className={toggle ? "toggle-img" : ""}
              src="https://ik.imagekit.io/fhe9c5aen/Mern-portfolio/1698303979228-removebg-preview%20(2)_NJtYUiFEp.png?updatedAt=1708365438432"
              alt="kishore profile picture"
              initial={{ scale: 1 }}
              animate={{
                scale: [1, 1.1, 1],
                transition: { duration: 2, repeat: Infinity },
              }} // Scale animation with an infinite loop
              whileTap={{ scale: 0.9 }}
              style={{ borderRadius: "50%" }}
            />

            <div className="nav-items">
              <div
                className="nav-item"
                style={{
                  textAlign: toggle ? "center" : "",
                }}
              >
                <div className="nav-link">
                  <ScrollLink
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome size={30} title="Home" />
                  </ScrollLink>
                </div>

                <div className="nav-link">
                  <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout size={30} title="About" />
                  </ScrollLink>
                </div>
                <div className="nav-link">
                  <ScrollLink
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcReading size={30} title="Education" />
                  </ScrollLink>
                </div>

                <div className="nav-link">
                  <ScrollLink
                    to="tech"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBiotech size={30} title="Tech Stack" />
                  </ScrollLink>
                </div>

                <div className="nav-link">
                  <ScrollLink
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcVideoProjector size={30} title="Projects" />
                  </ScrollLink>
                </div>
                <div className="nav-link">
                  <ScrollLink
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcPortraitMode size={30} title="Work Experience" />
                  </ScrollLink>
                </div>
                <div className="nav-link">
                  <ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcContacts size={30} title="Contact" />
                  </ScrollLink>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="navbar-profile-pic">
            <motion.img
              className={toggle ? "toggle-img" : ""}
              src="https://ik.imagekit.io/fhe9c5aen/Mern-portfolio/1698303979228-removebg-preview%20(2)_NJtYUiFEp.png?updatedAt=1708365438432"
              alt="kishore profile picture"
              initial={{ scale: 1 }}
              animate={{
                scale: [1, 1.1, 1],
                transition: { duration: 2, repeat: Infinity },
              }} // Scale animation with an infinite loop
              whileTap={{ scale: 0.9 }}
              style={{ borderRadius: "50%" }}
            />

            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <ScrollLink
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome size={30} title="Home" />
                    Home
                  </ScrollLink>
                </div>

                <div className="nav-link">
                  <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout size={30} title="About" />
                    About
                  </ScrollLink>
                </div>
                <div className="nav-link">
                  <ScrollLink
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcReading size={30} title="Education" />
                    Education
                  </ScrollLink>
                </div>

                <div className="nav-link">
                  <ScrollLink
                    to="tech"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBiotech size={30} title="Tech Stack" />
                    Tech Stack
                  </ScrollLink>
                </div>

                <div className="nav-link">
                  <ScrollLink
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcVideoProjector size={30} title="Projects" />
                    Projects
                  </ScrollLink>
                </div>
                <div className="nav-link">
                  <ScrollLink
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcPortraitMode size={30} title="Work Experience" />
                    Work Experience
                  </ScrollLink>
                </div>
                <div className="nav-link">
                  <ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcContacts size={30} title="Contact" />
                    Contact
                  </ScrollLink>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
