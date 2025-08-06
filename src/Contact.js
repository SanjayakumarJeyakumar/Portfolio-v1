import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-con">
        <div className="contact-info">
          <h3 className="contact-header">SANJAYAKUMAR JEYAKUMAR</h3>
          <p className="contact-text">
            Front-End Developer with a strong CS foundation, skilled in building
            responsive, interactive websites using HTML, CSS, JavaScript, and
            modern tools. Passionate about UI/UX, performance, and crafting
            scalable, real-time web apps with clean, user-focused code.
          </p>
        </div>
        <div className="contact-social">
          <h3 className="contact-header con-s">Socials</h3>
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="contact-social-box">
      <a href="mailto:sanjayakumarjks@gmail.com" className=" contact-icon ">
        <FaEnvelope size={24} className="con-icon" />
      </a>
      <a href="tel:+918012408409" className=" contact-icon ">
        <FaPhoneAlt size={24} className="con-icon" />
      </a>
      <a
        href="https://github.com/SanjayakumarJeyakumar"
        className=" contact-icon "
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} className="con-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/sanjayakumar-jeyakumar-045009301/"
        target="_blank"
        rel="noopener noreferrer"
        className=" contact-icon "
      >
        <FaLinkedin size={24} className="con-icon" />
      </a>
    </div>
  );
}
