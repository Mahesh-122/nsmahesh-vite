import React, {useContext} from "react";
import {Fade} from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Course() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade bottom duration={1000}>
          <div className="wrapper">
            <div className="section education" id="course-section">
              <div className="title">
                Course
                <span className="circle">
                <i className="fa fa-book icon" aria-hidden="true"></i>
                </span>
              </div>
              <div className="cd-timeline">
                <div className="cd-timeline-block animated">
                  <div className="cd-timeline-point">
                    <i className="fa fa-check icon" aria-hidden="true"></i>
                  </div>
                  <div className="cd-timeline-content">
                    <div className={isDark?"dark-menu certificate-card content-box" : "content-box"}>
                      <div className="date">2016-2017</div>
                      <div className="name">Pankaj Sir's Academy.</div>
                      <div className="category">Bangalore, Karnataka</div>
                      <p>
                        Pankaj Sir's Academy is pioneer Training Institute and
                        leaders for imparting HIGH VALUE Training course on
                        computer related programming and languages, I completed
                        JavaScript course with ReactJS with the presence of sir
                        advise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
