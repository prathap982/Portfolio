import React from "react";
import "./about.css";
import Jump from "react-reveal/Jump";
import ProfilePic from '../../assets/Images/ProfilePic.JPG'

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={ProfilePic}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
               I’m a <strong>Full Stack Developer</strong> with 2 years of experience in the <strong>MERN</strong> stack, passionate about building scalable web applications. Currently, I’m working on an Ad-Tech project at Cognizant, where I develop innovative solutions to enhance digital advertising efficiency.

               My expertise lies in <strong>React.js, Node.js, MongoDB, Express.js,Redux,Redux Toolkit, Zustand</strong>, and other modern web technologies. I have also contributed to open-source projects, including an <strong>E-commerce shopping platform</strong> and a <strong>real-time chat application</strong>.

               Beyond coding, I enjoy solving complex problems, optimizing performance, and learning new technologies to stay ahead in the ever-evolving tech landscape. Let’s connect and create something amazing together! 🚀
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;