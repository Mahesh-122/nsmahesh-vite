import React, {useContext} from "react";
// import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-awesome-reveal";
import "../../assets/scss/Basic.scss";
import "../../assets/scss/Layout.scss";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div className="wrapper">
              <div className="section experience" id="experience-section">
                <div className="title">
                  Experience
                  <span className="circle">
                  <i className="fa fa-briefcase icon" aria-hidden="true"></i>

                  </span>
                </div>
                <div className="cd-timeline">
                  <div className="cd-timeline-block animated">
                    <div className="cd-timeline-point">
                    <i className="fa fa-check icon" aria-hidden="true"></i>
                    </div>
                    <div className="cd-timeline-content">
                      <div className={isDark?"dark-menu certificate-card content-box" : "content-box"}>
                        <div className="date">2021-Present</div>
                        <div className="name">Ganaka Labs pvt ltd</div>
                        <div className="category">Frontend Developer</div>
                        <ul
                          style={{
                            listStyle: "initial",
                            paddingLeft: "20px",
                            lineHeight: "1.6",
                            fontSize: "14px"
                          }}
                        >
                          <li>
                            Using Ionic platform to meet the requirements of
                            clients, we developed a hybrid web application which
                            includes features like Quality assurance, audits and
                            clibrations, single and groups audio call process of
                            feedback data handling and Roles from database using
                            agile process.
                          </li>
                          <li>
                            Working on Onboarding website using react framework
                            and Ant design for styling the components. Worked on
                            dynamic pages like the dashboard and residential
                            details and a few other static pages.
                          </li>
                          <li>
                            Delivered with a team of 6 the website used by our
                            clients, reducing response time of our clients by
                            50%.
                          </li>
                          <li>
                            Design and built using figma tool for easy designing
                            process and maintaining the UI design for client
                            side requirements.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="cd-timeline-block animated">
                    <div className="cd-timeline-point">
                    <i className="fa fa-check icon" aria-hidden="true"></i>
                    </div>
                    <div className="cd-timeline-content">
                      <div className={isDark?"dark-menu certificate-card content-box" : "content-box"}>
                        <div className="date">2019-2021</div>
                        <div className="name">Yetticate Solutions</div>
                        <div className="category">Frontend Developer</div>
                        <ul
                          style={{
                            listStyle: "initial",
                            paddingLeft: "20px",
                            lineHeight: "1.6",
                            fontSize: "14px"
                          }}
                        >
                          <li>
                            Design, build and deliver products across the full
                            development lifecycle making use of the best
                            processes and practices.
                          </li>
                          <li>
                            Reduced the load time of the website by 50% by
                            developing modular code
                          </li>
                          <li>
                            Delivered with a team of 2 the Dashboard used by our
                            clients, reducing response time of our clients by
                            50%
                          </li>
                          <li>
                            Strong experience with Javascript & Expert knowledge
                            of modern HTML and CSS and at least one preprocessor
                            such as SCSS/LESS
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
        
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
