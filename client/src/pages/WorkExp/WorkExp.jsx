import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";

const WorkExp = () => {
  return (
    <div className="work" id="work">
      <div className="container work-exp">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Work Experience
        </h2>
        <hr />
        <VerticalTimeline lineColor="#1e1e2c">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "white",
              color: "#1e1e2c",
              maxWidth: "600px", // Adjusted width for better readability
            }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="May 2023 - Present"
            iconStyle={{ background: "#1e1e2c", color: "#fff", fontSize: "20px" }} // Reduced icon size
            icon={<SiReact />}
          >
            <h3 className="vertical-timeline-element-title">
              MERN Stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Cognizant, India
            </h4>
            <p style={{ textAlign: "left", lineHeight: "1.6" }}> 
              - <strong>Enhancing data onboarding and activation</strong> by improving customer data matching with client and partner identifiers.  
              <br /> <br />
              - <strong>Developing APIs</strong> to allow users to seamlessly activate, track, and evaluate onboarded data using <strong>Connect</strong> or relevant APIs.  
              <br /> <br />
              - Configuring and triggering the <strong>matching, delivery, and refreshing</strong> of <strong>1P, 2P, and 3P data</strong> across multiple partners.  
              <br /> <br />
              - Implementing <strong>real-time tracking and reporting</strong> for <strong>reach stats and system statuses</strong>.  
              <br /> <br />
              - Optimizing <strong>data pipelines</strong> to improve <strong>match rates, activation efficiency, and reporting accuracy</strong>.  
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExp;
