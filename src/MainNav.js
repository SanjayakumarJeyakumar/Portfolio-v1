import sanjayImage from "./Content/sanjay.jpg";

export default function MainNav() {
  return (
    <div className="main-nav-container">
      <NavImgName />
      <NavTextList />
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

function NavTextList() {
  return (
    <ul class="main-nav-list-box">
      <NavText>Home</NavText>
      <NavText>About</NavText>
      <NavText>Projects</NavText>
      <NavText>Contact</NavText>
    </ul>
  );
}

function NavText({ children, link }) {
  return (
    <li className="main-nav-list-text">
      <a href="#" className="main-nav-list-text-a">
        {children}
      </a>
    </li>
  );
}
