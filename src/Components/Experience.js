import React from "react";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import js from "../Assets/js.png";
import reactImage from "../Assets/react.png";
import bootstrap from "../Assets/bootstrap.png";
import github from "../Assets/github.png";

const Experience = () => {
  const techs = [
    { id: 1, src: html, title: "HTML" },
    { id: 2, src: css, title: "CSS" },
    { id: 3, src: js, title: "JavaScript" },
    { id: 4, src: reactImage, title: "React" },
    { id: 5, src: bootstrap, title: "Bootstrap" },
    { id: 6, src: github, title: "GitHub" },
  ];

  return (
    <div
      id="experience"
      className="bg-dark d-flex flex-column justify-content-center align-items-center"
    >
      <div className="text-center">
        <h2 className="display-3 font-weight-bold border-bottom border-light d-inline-block custom-font custom-heading">
          Experience
        </h2>
        <p className="py-1 custom-paragraph text-center">
          These are the technologies I have worked with:
        </p>
        <div className="row justify-content-center">
          {techs.map(({ id, src, title }) => (
            <div
              key={id}
              className="col-6 col-lg-4 mb-3 d-flex flex-column align-items-center"
            >
              <div className="card shadow-lg border-0 p-2 hover-scale card-custom">
                <img
                  src={src}
                  alt={title}
                  className="card-img-top w-75 mx-auto card-img-custom"
                />
                <div className="card-body card-body-custom">
                  <h5 className="card-title">{title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
