import React from "react";
import ScrollToTop from "react-scroll-to-top";
import "./Footer.css";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const Footer = ({ author }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pb-3 footer"
      >
        <span className="border-bottom nav footer-border" />
        <motion.h6
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center pt-4"
        >
          Made <FaHeart className="text-danger" /> by {author} © {currentYear}
        </motion.h6>
      </motion.footer>

      <ScrollToTop
        smooth
        color="#fff"
        style={{
          backgroundColor: "#a45ee9",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default Footer;
