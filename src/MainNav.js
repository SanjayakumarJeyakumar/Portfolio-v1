import sanjayImage from "./Content/sanjay.jpg";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function MainNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="main-nav-container">
      <NavImgName />
      <NavTextList open={open} setOpen={setOpen} />
      <NavToggle setOpen={setOpen} open={open} />
    </div>
  );
}
function NavToggle({ open, setOpen }) {
  return (
    <div className="menu-toggle-btn" onClick={() => setOpen((prev) => !prev)}>
      {open ? <FaTimes size={28} /> : <FaBars size={28} />}
    </div>
  );
}

function NavImgName() {
  return (
    <div class="main-nav-img-name-box ">
      <img
        src={sanjayImage}
        alt="sanjay image"
        class="nav-img main-nav-list-text-a"
      />
      <a href="#" className="main-nav-list-text main-nav-list-text-a ">
        Sanjayakumar jeyakumar
      </a>
    </div>
  );
}

function NavTextList({ open, setOpen }) {
  return (
    <ul class={`main-nav-list-box ${open ? "nav-open" : ""}`}>
      <NavText link="home" setOpen={setOpen}>
        Home
      </NavText>
      <NavText link="about" setOpen={setOpen}>
        About
      </NavText>
      <NavText link="project" setOpen={setOpen}>
        Projects
      </NavText>
      <NavText link="contact" setOpen={setOpen}>
        Contact
      </NavText>
    </ul>
  );
}

function NavText({ children, link, setOpen }) {
  return (
    <li className="main-nav-list-text">
      <a
        href={`#${link}`}
        className="main-nav-list-text-a nav-mobile"
        onClick={() => setOpen(false)}
      >
        {children}
      </a>
    </li>
  );
}
