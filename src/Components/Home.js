import React from "react";
import hero from "../Assets/heroimage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-dark text-light d-flex align-items-center min-vh-100 pb-5 pt-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
            <h1 className="display-3 fw-bold mb-4 custom-heading">
              I'm a Front-end Developer
            </h1>
            <p className="lead mb-4 custom-paragraph">
              As a seasoned Front-end Developer, I create captivating and user-friendly web solutions. Leveraging my 2 years of experience and expertise in modern web technologies, I design engaging user interfaces that deliver exceptional experiences.
            </p>
            <Link to="portfolio" smooth duration={500}
              className="btn btn-primary btn-lg d-inline-flex align-items-center custom-button"
            >
              Explore My Portfolio
              <span className="ms-2 arrow-icon">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
          <div className="col-lg-6">
            <div className="d-flex justify-content-center justify-content-lg-end mb-5">
              <img
                src={hero}
                alt="my profile"
                className="img-fluid rounded-5 shadow-lg w-75 h-auto custom-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
