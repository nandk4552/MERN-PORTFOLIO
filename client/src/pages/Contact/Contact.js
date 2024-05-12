import React, { useEffect, useState } from "react";
import "./Contact.css";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import { BsLinkedin, BsInstagram, BsTwitterX, BsGithub } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import toast from "react-hot-toast";
import axios from "axios";

const Contact = () => {
  const [theme] = useTheme();
  const { ref, inView } = useInView({ triggerOnce: false });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (inView) {
      // Start animations when Contact section is in view
      console.log("Contact section is in view. Start animations here...");
    }
  }, [inView]);

  //handle submit contact form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !whatsapp || !msg) {
        toast.error("All fields are required");
        return;
      }
      const res = await axios.post("/api/v1/portfolio/sendEmail", {
        name,
        email,
        whatsapp,
        msg,
      });

      //validation
      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setWhatsapp("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="contact" ref={ref}>
      <div className="container contact" id={theme}>
        <h1 className="mb-5 text-uppercase" id={theme}>
          Contact Me
        </h1>
        <motion.div
          className="card card0 border-0"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1715126400&semt=ais"
                    alt="contact-image"
                    className="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <motion.div
                className="card2 d-flex card border-0 px-4 py-3"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="row">
                  <div className="row my-3">
                    <div className="d-flex align-items-center ">
                      <h6 className="my-auto lead fs-5 fw-bold text-muted text-uppercase">
                        connect on
                      </h6>
                      <motion.div
                        className="icon-container"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <a
                          href="https://www.linkedin.com/in/nandk4552/"
                          target="_blank"
                        >
                          <BsLinkedin
                            color="blue"
                            className="ms-3 hover"
                            size={30}
                          />
                        </a>
                      </motion.div>
                      <motion.div
                        className="icon-container"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <a href="https://github.com/nandk4552" target="_blank">
                          <BsGithub
                            color="#2b3137"
                            className="ms-3 hover"
                            size={30}
                          />
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
                            size={30}
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
                            size={30}
                            color="black"
                          />
                        </a>
                      </motion.div>
                    </div>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line " />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Your Name"
                      className="mb-3"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Your Email"
                      className="mb-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="row px-3">
                    <input
                      type="number"
                      name="whatsapp Number"
                      id="whatsapp Number"
                      placeholder="Enter Your Whatsapp Number"
                      className="mb-3"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                    />
                  </div>

                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      id="msg"
                      placeholder="Write Your Message..."
                      className="mb-3"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  </div>

                  <div className="row px-3">
                    <button
                      className="button"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
