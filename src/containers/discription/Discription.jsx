import {useContext} from "react";
import Typewriter from "typewriter-effect";
import "../../assets/scss/Basic.scss";
import emoji from "react-easy-emoji";
import Button from "../../components/button/Button";
import {DiscriptionSection, greeting} from "../../portfolio";
import "../../assets/scss/card.scss";
import {Fade} from "react-awesome-reveal"; // import codingPerson from "../../assets/lottie/codingPerson";
import StyleContext from "../../contexts/StyleContext";

export default function Discription() {
  const {isDark} = useContext(StyleContext);
  if ((!DiscriptionSection.display, !greeting.displayGreeting)) {
    return null;
  }

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="discription">
      <div className="wrapper">
        <Fade bottom duration={1000}>
          <div className="section about" id="about-section">
            <div
              className={
                isDark
                  ? "dark-menu certificate-card content-box"
                  : "certificate-card content-box"
              }
            >
              <div className="row ">
                <div className="col col-m-12 col-t-5 col-d-5">
                  <div className="info-list">
                    <ul>
                      <li>
                        <strong>
                          <span>Job:</span>
                        </strong>
                        {greeting.title}
                      </li>
                      <li>
                        <strong>
                          <span>Address:</span>
                        </strong>{" "}
                        {greeting.address}
                      </li>
                      <li>
                        <strong>
                          <span>Phone:</span>
                        </strong>{" "}
                        <a href="tel:9663054850">{greeting.mobile}</a>
                      </li>
                      <li>
                        <strong>
                          <span>Resume</span>
                        </strong>{" "}
                        {/* <a  href={greeting.resumeLink}> */}
                        {greeting.resumeLink && (
                          <Button
                            text="Check Resume"
                            newTab={true}
                            href={greeting.resumeLink}
                          />
                        )}
                        {/* </a> */}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col col-m-12 col-t-7 col-d-7">
                  <div className="text-box">
                    <p>
                      <strong>Hi, I am {greeting.username}</strong>
                      <span className="wave-emoji">{emoji("👋")}</span>
                    </p>
                    <span style={{display: "flex", gap: "6px"}}>
                      I am{" "}
                      <Typewriter
                        options={{
                          strings: greeting.roles,
                          autoStart: true,
                          loop: true
                        }}
                      />
                    </span>
                    <br></br>
                    <span>{greeting.subTitle}</span>
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
