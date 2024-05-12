import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.txt";
import "./Home.css";
import { ImUserTie } from "react-icons/im";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { useTheme } from "../../context/ThemeContext";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { motion, spring } from "framer-motion";

const Home = () => {
  const [theme, setTheme] = useTheme();
  // handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <section id={`home`}>
      <div class="container-fluid home-container">
        <motion.div
          className="theme-btn"
          onClick={handleTheme}
          layout
          transition={spring}
        >
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </motion.div>
        <div className="container home-content">
          <h2>Hi there 👋, I'm </h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Nand Kishore",
                  "The Lead Of Algorand Blockchain Club VJIT",
                  "A Full Stack Developer !",
                  "A MERN Stack Developer !",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-btns">
            <a
              className="btn btn-hire"
              href="https://api.whatsapp.com/send?phone=9346921679"
              rel="noreferrer"
              target="_blank"
            >
              <ImUserTie />
              Hire Me
            </a>
            <a
              className="btn btn-cv"
              href="https://docs.google.com/document/d/1763Ib5DO09QvdrxVT9f7s-bv4IEG89PSv2FA5DKdSoU/edit?usp=sharing"
              // href={Resume}
              target="_blank"
              download={"Devarla Nand Kishore Resume.pdf"}
            >
              <IoDocumentAttachSharp />
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
