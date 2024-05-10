import React from "react";
import {
  FcAbout,
  FcHome,
  FcPortraitMode,
  FcBiotech,
  FcReading,
  FcVideoProjector,
  FcContacts,
  FcVoicePresentation,
} from "react-icons/fc";

import "./Menus.css";
const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img
              className={"toggle-img"}
              src="https://media.licdn.com/dms/image/D4E03AQH16XKaIj-Bcw/profile-displayphoto-shrink_200_200/0/1698303979228?e=1720051200&v=beta&t=FHe_CJz6nHVqCrvQlhwNesUDQu4ismxaXFOAqsZXoPc"
              alt="kishore profile picture"
            />
            <div className="nav-items">
              <div
                className="nav-item"
                style={{
                  textAlign: toggle ? "center" : "",
                }}
              >
                <div className="nav-link">
                  <FcHome size={30} title="Home" />
                </div>
                <div className="nav-link">
                  <FcAbout size={30} title="About" />
                </div>
                <div className="nav-link">
                  <FcPortraitMode size={30} title="Work Experience" />
                </div>
                <div className="nav-link">
                  <FcBiotech size={30} title="Tech Stack" />
                </div>
                <div className="nav-link">
                  <FcReading size={30} title="Education" />
                </div>
                <div className="nav-link">
                  <FcVideoProjector size={30} title="Projects" />
                </div>
                <div className="nav-link">
                  <FcVoicePresentation size={30} title="Testimonials" />
                </div>
                <div className="nav-link">
                  <FcContacts size={30} title="Contact" />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="navbar-profile-pic">
            <img
              className={toggle ? "toggle-img" : ""}
              src="https://media.licdn.com/dms/image/D4E03AQH16XKaIj-Bcw/profile-displayphoto-shrink_200_200/0/1698303979228?e=1720051200&v=beta&t=FHe_CJz6nHVqCrvQlhwNesUDQu4ismxaXFOAqsZXoPc"
              alt="kishore profile picture"
            />
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <FcHome size={30} title="Home" />
                  Home
                </div>
                <div className="nav-link">
                  <FcAbout size={30} title="About" />
                  About
                </div>
                <div className="nav-link">
                  <FcPortraitMode size={30} title="Work Experience" />
                  Work Experience
                </div>
                <div className="nav-link">
                  <FcBiotech size={30} title="Tech Stack" />
                  Tech Stack
                </div>
                <div className="nav-link">
                  <FcReading size={30} title="Education" />
                  Education
                </div>
                <div className="nav-link">
                  <FcVideoProjector size={30} title="Projects" />
                  Projects
                </div>
                <div className="nav-link">
                  <FcVoicePresentation size={30} title="Testimonials" />
                  Testimonials
                </div>
                <div className="nav-link">
                  <FcContacts size={30} title="Contact" />
                  Contact
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
