import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.txt";
import "./Home.css";
import { ImUserTie } from "react-icons/im";
import { IoDocumentAttachSharp } from "react-icons/io5";

const Home = () => {
  return (
    <>
      <div class="container-fluid home-container">
        <div className="container home-content">
          <h2>Hi👋 I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer !",
                  "MERN Stack Developer !",
                  "Lead Of Algorand Blockchain Club VJIT",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-btns">
            <button className="btn btn-hire">
              <ImUserTie size={22} />
              Hire Me
            </button>
            <a
              className="btn btn-cv"
              // href="https://docs.google.com/document/d/1763Ib5DO09QvdrxVT9f7s-bv4IEG89PSv2FA5DKdSoU/edit?usp=sharing"
              href={Resume}
              download={"Devarla Nand Kishore Resume.pdf"}
            >
              <IoDocumentAttachSharp />
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
