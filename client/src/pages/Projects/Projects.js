import React from "react";
import "./Projects.css";
import chatImage from '../../assets/Images/chat-app.jpg'

const Projects = () => {
  return (
    <div className="project" id="projects">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        Top Recent Projects
      </h2>
      <hr />
      <p className="pb-3 text-center">
        Here are some of my latest projects, showcasing my expertise in full-stack development.
      </p>

      <div className="row" id="ads">
          {/* E-Commerce Project */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                  alt="E-Commerce Project"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Redux Toolkit</span>
                <span className="card-detail-badge">Node.js</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <h6 className="text-uppercase">E-Commerce Shopping Website</h6>
                <p>
                A full-stack <strong>E-commerce Shopping platform</strong> built using the <strong>MERN</strong> stack, allowing users to browse, purchase, and manage orders seamlessly. The platform supports <strong>secure payments, real-time order tracking</strong>, and an <strong>intuitive user experience</strong> .
                </p>
                <a className="ad-btn" href="https://github.com/prathap982/BuyIt">GitHub</a>
                <a className="ad-btn" href="https://buyit-851q.onrender.com">Live Demo</a>
              </div>
            </div>
          </div>

          {/* Chat App Project */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Real-Time Chat</span>
                <img
                  src={chatImage}
                  alt="Chat App"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Socket.io</span>
                <span className="card-detail-badge">Zustand</span>
              </div>
              <div className="card-body text-center">
                <h6 className="text-uppercase">Real-Time Chat Application</h6>
                <p>
                A real-time messaging application with <strong>instant text & image sharing, online user tracking</strong>, and customizable themes. Built using <strong>Socket.io </strong>for seamless real-time communication and optimized for performance.
                </p>
                <a className="ad-btn" href="https://github.com/prathap982/Chat-App">GitHub</a>
                <a className="ad-btn" href="https://chat-app-f7p7.onrender.com/">Live Demo</a>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Projects;
