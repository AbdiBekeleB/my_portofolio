import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="py-5 w-100 vh-101 bg-dark text-white d-flex align-items-center justify-content-center custom-bg"
    >
      <div className="container text-center">
        <div className="mb-2">
          <h2 className="display-3 font-weight-bold border-bottom border-light d-inline-block custom-font custom-heading">
            About me
          </h2>
        </div>
        <p className="lead custom-font custom-text">
          I'm Abdi Bekele, a frontend developer and computer engineering student. I'm passionate about creating visually
          appealing and user-friendly web applications that combine my technical
          expertise and creative flair. As a frontend developer, I'm proficient
          in languages and frameworks like HTML, CSS, JavaScript, and React.js.
          I approach each project with a focus on clean, efficient code and a
          deep understanding of user needs.
        </p>

        <p className="lead mt-4 custom-font custom-text">
          Alongside my frontend development work, I'm pursuing a degree in
          computer engineering, which allows me to deepen my technical knowledge
          and stay up-to-date with the latest advancements in the tech industry.
          This dual expertise enables me to deliver well-rounded solutions that
          address both the user experience and the underlying technical
          requirements.
        </p>
        <p className="lead mt-4 custom-font custom-text">
          I'm always eager to connect with fellow developers,
          designers, and tech enthusiasts. If you'd like to discuss a potential
          project or collaboration, please don't hesitate to reach out to me. I
          look forward to connecting with you and exploring new opportunities
          together.
        </p>
      </div>
    </div>
  );
};

export default About;