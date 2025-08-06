export default function AboutMeSection() {
  return (
    <div className="abtme-container">
      <AboutMe />
      <div class="abtme-2nd-section">
        <GetToKnowMe />
        <SkillBox />
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="abtme-box">
      <h2 className="abtme-header">About me</h2>
      <p className="abtme-empty"></p>
      <p className="abtme-info">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </p>
    </div>
  );
}

function GetToKnowMe() {
  return (
    <div class="gtkm-box">
      <h3 class="gtkm-header">Get to know me!</h3>
      <p class="gtkm-info">
        I'm <span class="gtkm-info-bold">Front-End Developer</span> with a
        strong foundation in Computer Science. Proficient in creating
        <span class="gtkm-info-bold"> responsive</span>, interactive, and
        user-centric websites using HTML, CSS, JavaScript, and modern
        development tools. Experienced in building{" "}
        <span class="gtkm-info-bold">real-time functionality </span>
        and managing data persistence with clean, scalable code. Passionate
        about UI/UX design,{" "}
        <span class="gtkm-info-bold"> performance optimization </span>, and
        continuously learning new technologies to craft impactful web
        applications and improve the overall user experience.
      </p>
      <button className="blue-button">Contact</button>
    </div>
  );
}

function SkillBox() {
  return (
    <div>
      <h3 class="gtkm-header">SKILLS</h3>
      <div className="skill-text-container">
        <Skill classTo={"html"}>HTML</Skill>
        <Skill classTo={"css"}>CSS</Skill>
        <Skill classTo={"js"}>Javascript</Skill>
        <Skill classTo={"react"}>React</Skill>
        <Skill classTo={"py"}>Python</Skill>
        <Skill classTo={"java"}>Java</Skill>
        <Skill classTo={"cpp"}>C/C++</Skill>
        <Skill classTo={"git"}>Git</Skill>
        <Skill classTo={"sql"}>SQL</Skill>
        <Skill classTo={"mongo"}>MongoDB</Skill>
      </div>
    </div>
  );
}

function Skill({ children, classTo }) {
  return (
    <div className={`skill-text-box ${classTo}`}>
      <p className="skill-text">{children}</p>
    </div>
  );
}
