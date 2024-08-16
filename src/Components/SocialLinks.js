import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientX <= 50 && !isSmallScreen) {
        setShowLinks(true);
      } else {
        setShowLinks(false);
      }
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1070);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen]);

  const links = [
    {
      id: 1,
      icon: <FaLinkedin size={isSmallScreen ? 20 : 30} />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/abdi-bekele-beyene/",
      style: "rounded-top-left",
    },
    {
      id: 2,
      icon: <FaGithub size={isSmallScreen ? 20 : 30} />,
      name: "GitHub",
      href: "https://github.com/AbdiBekeleB",
      style: "rounded-top-left",
    },
    {
      id: 3,
      icon: <HiOutlineMail size={isSmallScreen ? 20 : 30} />,
      name: "Mail",
      href: "mailto:abdibekelebeyene@gmail.com",
      style: "rounded-top-left",
    },
    {
      id: 4,
      icon: <BsFillPersonLinesFill size={isSmallScreen ? 20 : 30} />,
      name: "Resume",
      href: "/resume.pdf",
      style: "rounded-bottom-left",
      download: true,
    },
  ];

  return (
    <div
      className={`social-links d-flex flex-column position-fixed top-50 start-0 translate-middle-y ${
        showLinks ? "show" : "hide"
      } ${isSmallScreen ? "small-screen" : ""}`}
    >
      <ul className="list-unstyled">
        {links.map(({ id, icon, name, href, style, download }) => (
          <li key={id} className={`mb-2 ${style}`}>
            <a
              href={href}
              className="d-flex align-items-center social-link text-white text-decoration-none"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon-container">{icon}</div>
              <span className="link-name fs-5 fw-normal">{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
