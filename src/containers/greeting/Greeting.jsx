import {useContext} from "react";
import {Fade} from "react-awesome-reveal";
import {Tilt} from "react-tilt";
import profile from "../../assets/images/profilepicture.jpg";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div id="section">
        <div className="st-box">
          <Tilt>
            <div className="st-image">
              <img src={profile} alt="N S Mahesh" />
            </div>
          </Tilt>

          <div className={isDark ? "dark-mode st-title" : "st-title"}>
            {greeting.username}
          </div>
          <div className="st-subtitle">{greeting.title}</div>
          <SocialMedia />
        </div>
      </div>
    </Fade>
  );
}
