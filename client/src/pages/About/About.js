import React, { useEffect } from "react";
import "./About.css";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [theme] = useTheme();
  const { ref, inView } = useInView({ triggerOnce: false });

  useEffect(() => {
    // Start animations when About section is mounted
    console.log("About section is mounted. Start animations here...");
  }, []);

  return (
    <section id="about" ref={ref}>
      <div className="about">
        <motion.div className="row">
          <motion.div
            className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img"
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <img
              src="https://media.licdn.com/dms/image/D4E03AQH16XKaIj-Bcw/profile-displayphoto-shrink_200_200/0/1698303979228?e=1720656000&v=beta&t=yhRtOoLKfV0fZ3rwBvJUBu7mmisL84OPI80HFOPRiqw"
              alt="about profile picture"
            />
          </motion.div>
          <motion.div
            className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content"
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h1 id={theme}>About Me</h1>
            <p>
              Hello! I’m Devarla Nand Kishore, an IT student at Vidya Jyothi
              Institute of Technology, Telangana. I specialize in Frontend and
              Backend development, with proficiency in React Js, Bootstrap,
              NodeJs, ExpressJs, and databases like MySQL and MongoDB. I have a
              good understanding of Data Structures and Algorithms, and I’m
              well-versed in C++. I’ve interned at LetsGrowMore as a Web
              Developer, where I worked on projects like a faculty feedback
              portal, an expense tracker management system, and a timetable
              tracking website. These projects have honed my skills in MERN
              Stack and UI design. I hold certifications in ReactJs from
              HackerRank, C++ from Cisco, NodeJs from LinkedIn, and Web
              Development from Mimo. I’m also active on coding platforms like
              LeetCode, CodeChef, and Coding Ninjas. Beyond academics, I’ve
              served as the Lead of the Algorand Blockchain Club, delivered
              technical talks on Blockchain, and been a part of the core team at
              GDSC WOW HYD 2023. I was recognized by OnePlus as one of the top
              15 participants globally in the OnePlus Nord CE 4 mobile phone
              user trial.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
