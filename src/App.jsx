import {useEffect, useState} from "react";
import "./App.css";
import Particles from "./components/particles/Particles";
import Header from "./components/header/Header";
import Greeting from "./containers/greeting/Greeting";
import Discription from "./containers/discription/Discription";
import Skills from "./containers/Skills/skills";
import Course from "./containers/course/Course";
import Education from "./containers/education/Education";
import Contact from "./containers/contactForm/Contact";
import Footer from "./components/footer/Footer";
import WorkExperience from "./containers/workExperience/WorkExpercience";
import Project from "./containers/project/Project";
import {AnimatePresence} from "framer-motion";
import {StyleProvider} from "./contexts/StyleContext";
import {useLocalStorage} from "./hooks/useLocalStorage";
import {splashScreen} from "./portfolio";
import ScrollToTopButton from "./containers/topButton/Top";
import SplashScreen from "./containers/SplashScreen/SplashScreen";
import ProjectDetails from "./components/projectDetails/ProjectDetails";

function App() {
  const [openModal, setOpenModal] = useState({state: false, project: null});
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);
  const changeTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);
  return (
    <>
      {isShowingSplashAnimation && splashScreen.enabled ? (
        <SplashScreen />
      ) : (
        <div className="page" id="home-section">
          <div className={isDark ? "dark-mode" : null}>
            <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
              <Particles />
              <Header />
              <AnimatePresence>
                <div className={isDark ? "dark-menu container" : "container"}>
                  <Greeting />
                  <Discription />
                  <Skills />
                  <WorkExperience />
                  <Project openModal={openModal} setOpenModal={setOpenModal} />
                  <Course />
                  <Education />
                  <Contact />
                  <Footer />
                  <ScrollToTopButton />
                  {openModal.state && (
                    <ProjectDetails
                      openModal={openModal}
                      setOpenModal={setOpenModal}
                    />
                  )}
                </div>
              </AnimatePresence>
            </StyleProvider>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
