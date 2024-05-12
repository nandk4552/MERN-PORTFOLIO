import React, { useEffect } from "react";
import "./Projects.css";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [theme] = useTheme();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      // Start animations when Projects section is in view
      console.log("Projects section is in view. Start animations here...");
    }
  }, [inView]);

  return (
    <motion.section
      className="container projects"
      id={`${theme} projects`}
      ref={ref}
    >
      <motion.h1
        id={theme}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        top recent projects
      </motion.h1>

      <motion.p
        className="pb-3 text-center"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Here are my top 3 recent projects. Each of these projects represents a
        unique challenge that I undertook and successfully completed. They
        showcase my skills, dedication, and my ability to deliver high-quality
        work.
      </motion.p>

      <div className="row" id="ads">
        {Array.from({ length: 3 }).map((_, index) => (
          <motion.div
            key={index}
            className="col-md-4"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: inView ? index * 0.2 : 0 }}
          >
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://productfolio.com/wp-content/uploads/img-feedback-portal-600x366.jpg"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto ">
                  <h5 className="text-uppercase">Feedback Portal Website</h5>
                </div>
                <a href="#" className="ad-btn">
                  View
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
