import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { RxCode } from "react-icons/rx";

import "./WorkExperience.css";
import { useTheme } from "../../context/ThemeContext";

const WorkExperience = () => {
  const [theme] = useTheme();
  return (
    <section id="work">
      <div className="container work" id={theme}>
        <h1 className="mb-3" id={theme}>
          Work Experience
        </h1>
        <VerticalTimeline lineColor={theme === "light" ? "#a45ee9" : "#fff"}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#fff    ",
              color: theme === "light" ? "#555" : "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fff   " }}
            date="May 2023"
            iconStyle={{
              background: "#a45ee9",
              color: "#fff",
            }}
            icon={<RxCode />}
          >
            <h3 className="vertical-timeline-element-title">Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">LetsGrowMore</h4>
            <p>
              As a Web Developer at LetsGrowMore, I had the opportunity to work
              on several innovative projects. My role involved creative
              direction, user experience design, and visual design. I was
              responsible for transforming ideas into functional and visually
              appealing web applications.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default WorkExperience;
