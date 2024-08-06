import {useContext, useState} from "react";
import "./Header.scss";
import StyleContext from "../../contexts/StyleContext";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";

function Header() {
  const {isDark} = useContext(StyleContext);
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <>
      <header onClick={ToggleSidebar}>
        <div className={isOpen ? "top-menu active" : "top-menu "}>
          <ul className={isDark ? "dark-menu " : "menu"}>
            <li className="active">
              <a onClick={ToggleSidebar} href="#home-section">
                <span className="circle">Home</span>
              </a>
            </li>
            <li>
              <a onClick={ToggleSidebar} href="#about-section">
                <span className="circle">About</span>
              </a>
            </li>
            <li>
              <a onClick={ToggleSidebar} href="#skills-section">
                <span className="circle">Skills</span>
              </a>
            </li>
            <li>
              <a onClick={ToggleSidebar} href="#experience-section">
                <span className="circle">Experience</span>
              </a>
            </li>
            <li>
              <a onClick={ToggleSidebar} href="#works-section">
                <span className="circle">Projects</span>
              </a>
            </li>
            <li>
              <a onClick={ToggleSidebar} href="#course-section">
                <span className="circle">course</span>
              </a>
            </li>
            <li>
              <a onClick={ToggleSidebar} href="#education-section">
                <span className="circle">Education</span>
              </a>
            </li>
            <li>
              <a onClick={ToggleSidebar} href="#contact-section">
                <span className="circle">Contact</span>
              </a>
            </li>
            <li className="toggle_center">
              <a href="/#" className="padding">
                <ToggleSwitch />
              </a>
            </li>
          </ul>
          <a href="/#" className="menu-btn" onClick={ToggleSidebar}>
            <span></span>
          </a>
        </div>
      </header>
    </>
  );
}
export default Header;
