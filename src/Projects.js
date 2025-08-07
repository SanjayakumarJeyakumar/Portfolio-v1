import MacImg1 from "./Content/mac_omni.png";
import MacImg2 from "./Content/mac_mapty.png";
import MacImg3 from "./Content/mac_Fork.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

export default function Projects() {
  return (
    <div className="project-container">
      <AboutPro />
      <div>
        <Project />
      </div>
    </div>
  );
}

function AboutPro() {
  return (
    <div className="abtme-box margin-top-96">
      <h2 className="abtme-header">Projects</h2>
      <p className="abtme-empty"></p>
      <p className="abtme-info">
        Here, you'll find a selection of personal projects I've built to sharpen
        my skills and explore various technologies. Each project includes a
        short description.
      </p>
    </div>
  );
}

function Project() {
  return (
    <>
      {" "}
      <div className="project-each-box">
        <div className="mac-img-wrapper">
          <img src={MacImg1} alt="mac-img" className="mac-img" />
        </div>
        <div className="pro-2nd">
          <h3 className="pro-head">OmniFood</h3>
          <p className="pro-info">
            {" "}
            A modern, responsive landing page for a fictional AI-powered food
            delivery service, showcasing features like intelligent meal
            planning, fast delivery, and customer testimonials.
          </p>
          <div className="pro-icon-box">
            <a
              href="https://github.com/SanjayakumarJeyakumar/Omnifood.git"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={36} className="pro-icon pro-icon-git" />
            </a>
            <a
              href="https://omnifood-project-sanjay.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
            >
              <FiLink size={36} className="pro-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="project-each-box">
        <div className="pro-2nd">
          <h3 className="pro-head">Forkify</h3>
          <p className="pro-info">
            {" "}
            A feature-rich recipe application that lets users search for
            recipes, view dynamic ingredient quantities based on servings, and
            manage their own personalized cookbook.
          </p>
          <div className="pro-icon-box">
            <a
              href="https://github.com/SanjayakumarJeyakumar/forkify-Js.git"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={36} className="pro-icon pro-icon-git" />
            </a>
          </div>
        </div>
        <div className="mac-img-wrapper do-up">
          <img src={MacImg3} alt="mac-img" className="mac-img " />
        </div>
      </div>
      <div className="project-each-box">
        <div className="mac-img-wrapper">
          <img src={MacImg2} alt="mac-img" className="mac-img" />
        </div>
        <div className="pro-2nd">
          <h3 className="pro-head">Mapty</h3>
          <p className="pro-info">
            {" "}
            An interactive workout tracker that allows users to log running and
            cycling activities on a live map, enriched with details like
            distance, duration, pace ( for running ), and elevation gain ( for
            cycling ).
          </p>
          <div className="pro-icon-box">
            <a
              href="https://github.com/SanjayakumarJeyakumar/mapty-js.git"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={36} className="pro-icon pro-icon-git" />
            </a>
            <a
              href="https://mapty-sanjay.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
            >
              <FiLink size={36} className="pro-icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
