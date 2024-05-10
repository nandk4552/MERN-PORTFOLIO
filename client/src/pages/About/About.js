import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="row">
          <div
            className="col-md-6 
          col-xl-6 col-lg-6 col-xs-12
          about-img"
          >
            <img
              src="https://media.licdn.com/dms/image/D4E03AQH16XKaIj-Bcw/profile-displayphoto-shrink_200_200/0/1698303979228?e=1720656000&v=beta&t=yhRtOoLKfV0fZ3rwBvJUBu7mmisL84OPI80HFOPRiqw"
              alt="about profile picture"
            />
          </div>
          <div
            className="col-md-6
           col-xl-6 col-lg-6 col-xs-12
          about-content"
          >
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              obcaecati labore adipisci, delectus, hic culpa fugiat deleniti
              quos ad aliquid minus corporis quas, molestias voluptatem
              laboriosam magni. Obcaecati sequi corporis error eaque quaerat
              nihil veritatis illo nesciunt facilis sit praesentium temporibus
              ea expedita quo possimus est, iusto voluptate ipsum accusamus?
              Laborum reiciendis voluptatum commodi consectetur dolore? Commodi
              fugiat suscipit similique quod optio nulla, voluptas labore quasi
              ducimus voluptatum quis consectetur enim autem impedit officiis
              ad. Cum hic quo dolor enim ab, nam harum aperiam rerum molestiae
              quaerat deleniti consequatur debitis aut velit vero inventore quos
              eaque autem incidunt doloribus doloremque.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
