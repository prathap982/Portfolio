import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import resume from "../../assets/docs/resume.pdf";

const Home = () => {
  return (
    <header className='home-header ' id="home">
      <div className="home-box">
        <h2>Hello, I'm</h2>
        <h1 className="home-title">
          <Typewriter
            options={{
              strings: ["FullStack Developer", "MERN Stack Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="home-subtext">
          Passionate about building scalable web applications and engaging user experiences.
        </p>
        <div className="home-buttons">
          <a className="btn btn-primary" href="https://api.whatsapp.com/send?phone=9110527374">Hire Me</a>
          <a className="btn btn-outline" href={resume} download="Prathap_resume.pdf">
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Home;


