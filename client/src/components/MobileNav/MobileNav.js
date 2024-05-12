import {
  FcAbout,
  FcBiotech,
  FcContacts,
  FcHome,
  FcPortraitMode,
  FcReading,
  FcVideoProjector,
} from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as ScrollLink } from "react-scroll";
import "./MobileNav.css";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { BsLinkedin, BsInstagram, BsTwitterX, BsGithub } from "react-icons/bs";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  // handle open menu
  const handleOpen = () => {
    setOpen(!open);
  };

  // handle close menu
  const handleClose = () => {
    setOpen(false);
  };

  // handle toggle menu
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header d-flex align-items-center">
          {open ? (
            <AiOutlineClose
              size={30}
              className="mobile-nav-icon"
              onClick={handleClose}
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}

          <div className="mobile-nav-title ms-auto me-5">
            <div className="row">
              <div className="d-flex align-items-center ">
                <motion.div
                  className="icon-container"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    href="https://www.linkedin.com/in/nandk4552/"
                    target="_blank"
                  >
                    <BsLinkedin color="blue" className="ms-3 hover" size={20} />
                  </a>
                </motion.div>
                <motion.div
                  className="icon-container"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a href="https://github.com/nandk4552" target="_blank">
                    <BsGithub color="black" className="ms-3 hover" size={20} />
                  </a>
                </motion.div>
                <motion.div
                  className="icon-container"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    href="https://www.instagram.com/_nandu_.1/"
                    target="_blank"
                  >
                    <BsInstagram
                      style={{
                        display: "block",
                        textAlign: "center",
                        color: "#fff",
                        padding: ".1rem",
                        borderRadius: ".2rem",
                        background: "#d6249f",
                        background:
                          "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
                        boxShadow: "0px 3px 10px rgba(0,0,0,.25)",
                      }}
                      className="ms-3 hover"
                      size={20}
                    />
                  </a>
                </motion.div>
                <motion.div
                  className="icon-container"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a href="https://twitter.com/nandk_1" target="_blank">
                    <BsTwitterX
                      className="ms-3 hover"
                      size={20}
                      color="black"
                    />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        {open && (
          <div className="mobile-nav-menu">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <ScrollLink
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleClose}
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
                    onClick={handleClose}
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
                    onClick={handleClose}
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
                    onClick={handleClose}
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
                    onClick={handleClose}
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
                    onClick={handleClose}
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
                    onClick={handleClose}
                  >
                    <FcContacts size={30} title="Contact" />
                    Contact
                  </ScrollLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
