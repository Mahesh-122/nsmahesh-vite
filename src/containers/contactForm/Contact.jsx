import {useRef ,useState ,useContext} from "react";
import emailjs from "@emailjs/browser";
import {Snackbar} from "@mui/material";
import StyleContext from "../../contexts/StyleContext";
import "./Contact.scss"; // Import the SCSS file
import EarthCanvas from "../../components/canvas/Earth";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef();
  const {isDark} = useContext(StyleContext);
  
  const handleSubmit = e => {

    e.preventDefault();

    emailjs
      .sendForm(
        "service_vur9i4a",
        "template_2g0ajbl",
        form.current,
        "9-5C_4tqjJ4cGZbNL"
      )
      .then(
        result => {
          setOpen(true)
          console.log(result.text);

        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className={isDark ? "dark-menu container" : "container"}id="contact-section">
     <EarthCanvas/>
      <div className="Wrapper">
        <div className="Title">Contact</div>
        <div className="Desc">
          Feel free to reach out to me for any questions or opportunities!
        </div>
        <form className="ContactForm" ref={form} onSubmit={handleSubmit}>
          <div className={isDark ? "dark-menu ContactTitle" : "ContactTitle"}>Email Me 🚀</div>
          <input
            className="ContactInput"
            placeholder="Your Email"
            name="from_email"
          />
          <input
            className="ContactInput"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            className="ContactInput"
            placeholder="Subject"
            name="subject"
          />
          <textarea
            className="ContactInputMessage"
            placeholder="Message"
            rows="4"
            name="message"
          />
          <input className="ContactButton" type="submit" value="Send" />
        </form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </div>
    </div>
  );
};

export default Contact;
