import React, { useEffect } from "react";
import "./TechStack.css";
import { TechstackList } from "../../utils/TechStackList.js";
import { useTheme } from "../../context/ThemeContext.js";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TechStack = () => {
  const [theme] = useTheme();
  const { ref, inView } = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      // Start animations when TechStack section is in view
      console.log("TechStack section is in view. Start animations here...");
    }
  }, [inView]);

  const bounceVariants = {
    initial: { scale: 0.8 },
    animate: { scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="tech" ref={ref}>
      <div className="container techstack" id={theme}>
        <motion.h1
          id={theme}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          Technologies
        </motion.h1>
        <motion.p
          className="text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          👉 I've worked with a variety of programming languages, honing my
          skills to build efficient and scalable applications. My toolkit
          includes languages like MERN, JavaScript, C++ etc.
        </motion.p>

        <AnimatePresence mode="wait">
          <div className="row">
            {TechstackList?.map((tech) => (
              <motion.div
                key={tech?._id}
                className="col-md-3"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1 }}
                variants={bounceVariants}
                whileHover="animate"
              >
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex align-items-center justify-content-center ">
                        <div className="align-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5 className=" my-1">{tech?.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TechStack;
