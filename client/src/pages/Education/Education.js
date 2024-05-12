import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { IoSchoolSharp } from "react-icons/io5";

import "react-vertical-timeline-component/style.min.css";
import "./Educaton.css";
import { useTheme } from "../../context/ThemeContext";

const Education = () => {
  const [theme] = useTheme();
  return (
    <section id="education">
      <div className="container education" id={theme}>
        <h1 className="mb-3" id={theme}>
          Education
        </h1>

        <VerticalTimeline lineColor="#a45ee9">
          <VerticalTimelineElement
            className="vertical-timeline-element-work"
            contentStyle={{
              background: "white",
              color: theme === "light" ? "#555" : "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2021 - present"
            iconStyle={{ background: "#a45ee9", color: "#fff" }}
            icon={<IoSchoolSharp />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Technology - IT
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Vidya Jyothi Institue of Technology
            </h4>
            <h6 className="cgpa lead text-muted fw-bold mt-2">CGPA 8.57/10</h6>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;
