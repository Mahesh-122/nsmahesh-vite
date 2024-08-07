import {useContext} from "react";
import Particles from "react-particles";
import {loadFull} from "tsparticles";
import {useCallback} from "react";
import StyledStarsCanvas from "../canvas/Stars";
import {motion} from "framer-motion";
import {headContentAnimation} from "../../utils/motion";
import particles from "../../assets/images/particles.jpg";
// import particles from "../../assets/images/milkyway.png";
import "../particles/Particles.scss";
import StyleContext from "../../contexts/StyleContext";

function Particless() {
  const {isDark} = useContext(StyleContext);
  const options = {
    particles: {
      number: {
        value: 0,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    fullScreen: false,
    fpsLimit: 0,
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },

    retina_detect: true
  };
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <div
      className={isDark ? " dark-menu started-bg" : "started-bg"}
      id="cursourpoint"
    >
      {" "}
      <motion.div {...headContentAnimation}>
        <div
          className="slide"
          style={{backgroundImage: "url(" + particles + ")"}}
        >
          <StyledStarsCanvas />
          <Particles id="tsparticles" options={options} init={particlesInit} />
        </div>
      </motion.div>
    </div>
  );
}

export default Particless;
