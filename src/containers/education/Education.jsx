import React, {useContext} from "react";
import {Fade} from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Education() {
  const {isDark} = useContext(StyleContext);

  return (
    <div className="education-section" id="education">
      <div className="wrapper">
        <div className="section education" id="education-section">
          <div className="title">
            Education
            <span className="circle">
              <i className="fa fa-graduation-cap icon" aria-hidden="true"></i>
            </span>
          </div>
          <div className="cd-timeline">
            <div className="cd-timeline-block animated">
              <div className="cd-timeline-point">
                <i className="fa fa-check icon" aria-hidden="true"></i>{" "}
              </div>
              <Fade left duration={1000}>
                <div className="cd-timeline-content">
                  <div
                    className={
                      isDark
                        ? "dark-menu certificate-card content-box"
                        : "content-box"
                    }
                  >
                    <div className="date">2013-2016</div>

                    <div className="name">
                      Bachelor of Science in Computer Science
                    </div>
                    <div className="category">Karwar, Karnataka</div>
                    <p>
                      Completed Bachelor Degree in Govt Arts And Science
                      College, Karwar from Karnataka University, Dharwad on
                      2016. B.Sc CS is a 3 yr degree course on computer related
                      programming and languages.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="cd-timeline-block animated">
              <div className="cd-timeline-point">
                <i className="fa fa-check icon" aria-hidden="true"></i>{" "}
              </div>
              <Fade right duration={1000}>
                <div className="cd-timeline-content">
                  <div
                    className={
                      isDark
                        ? "dark-menu certificate-card content-box"
                        : "content-box"
                    }
                  >
                    <div className="date">2011-2013</div>
                    <div className="name">Pre University Course</div>
                    <div className="category">Ankola, Karnataka</div>

                    <p>
                      Completed PUC from Dept. of Pre-University Education on
                      2013. It is a 2 yr Course bases on PCMB Physics,
                      Chemistry, Mathematics and Biology.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="cd-timeline-block animated">
              <div className="cd-timeline-point">
                <i className="fa fa-check icon" aria-hidden="true"></i>{" "}
              </div>
              <Fade left duration={1000}>
                <div className="cd-timeline-content">
                  <div
                    className={
                      isDark
                        ? "dark-menu certificate-card content-box"
                        : "content-box"
                    }
                  >
                    <div className="date">2009-2011</div>
                    <div className="name">
                      Secondary School Leaving Certificate
                    </div>
                    <div className="category">Ankola, Karnataka</div>

                    <p>
                      Completed SSLC from Karnataka Secondary Education
                      Examination Board on 2011. It is a 10 yr Course bases on
                      PCMB Physics, Chemistry, Mathematics and Biology.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
