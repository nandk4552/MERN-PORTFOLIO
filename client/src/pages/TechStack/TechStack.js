import React from "react";
import "./TechStack.css";
import { TechstackList } from "../../utils/TechStackList.js";

const TechStack = () => {
  return (
    <>
      <div className="container techstack">
        <h1 className="">Technologies</h1>
        <p className="text-center">👉 including programing languages </p>

        <div className="row">
          {TechstackList?.map((tech) => (
            <div key={tech?._id} className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="align-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech?.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
