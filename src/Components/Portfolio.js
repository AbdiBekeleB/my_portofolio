import React from "react";
import crud from "../Assets/Portfolio/crud.jpg";
import patient from "../Assets/Portfolio/Patient.png";
import ims from "../Assets/Portfolio/ims.png";
import company from "../Assets/Portfolio/company.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: crud,
      title: "CRUD App With Authentication",
      description: "CRUD App With Authentication built with React and Bootstrap.",
      demoLink: "https://github.com/AbdiBekeleB",
      codeLink: "https://github.com/AbdiBekeleB/CRUD_APP_WITH_AUTHENTICATION",
    },
    {
      id: 2,
      src: patient,
      title: "Patient Management System",
      description: "A patient management system built with React and Django.",
      demoLink: "https://github.com/AbdiBekeleB",
      codeLink: "https://github.com/AbdiBekeleB/Patient/tree/main/frontend",
    },
    {
      id: 3,
      src: ims,
      title: "Inventory Management System",
      description: "A robust inventory management built with React and Django.",
      demoLink: "https://github.com/AbdiBekeleB",
      codeLink: "https://github.com/AbdiBekeleB/IMS",
    },
    {
      id: 4,
      src: company,
      title: "Company Website",
      description: "A modern and responsive company website built with React and Bootstrap.",
      demoLink: "https://github.com/AbdiBekeleB",
      codeLink: "https://github.com/AbdiBekeleB/Company",
    },
  ];

  return (
    <div name='portfolio' className="portfolio-container px-5">
      <p className="display-3 font-weight-bold border-bottom border-light d-inline-block custom-font custom-heading">
        Portfolio
      </p>
      <p className="py-3 custom-paragraph">
        Check out some of my work right here
      </p>
      <div className="container portfolio-items rounded-4">
        {portfolios.map(
          ({ id, src, title, description, demoLink, codeLink }) => (
            <div key={id} className="portfolio-item">
              <div className="card text-black shadow-lg border-0 rounded-4 portfolio-card">
                <div className="position-relative">
                  <img
                    src={src}
                    alt={title}
                    className="card-img-top portfolio-image"
                  />
                  <div className="card-img-overlay d-flex align-items-center justify-content-center portfolio-overlay">
                    <div className="text-center">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">{description}</p>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <div className="d-flex flex-column flex-md-row justify-content-between">
                    <a href={demoLink} target="_blank" rel="noreferrer" className="btn btn-primary w-100 mb-2 mb-md-0 me-md-2">
                      Demo
                    </a>
                    <a href={codeLink} target="_blank" rel="noreferrer" className="btn btn-secondary w-100 ms-md-2">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Portfolio;
