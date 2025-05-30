import "./Contact.css"; // Import the CSS file
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p className="contact-intro">
          Let's connect and build something amazing together!
        </p>
        <div className="contact-cards">
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <p>
              <strong>Email:</strong>
              <br />
              <a href="mailto:manimaran1662001@gmail.com">
                manimaran1662001@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-card">
            <FaLinkedin className="contact-icon" />
            <p>
              <strong>LinkedIn:</strong>
              <br />
              <a
                href="https://www.linkedin.com/in/manimaran-p-27101b205"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/manimaran-p-27101b205
              </a>
            </p>
          </div>
          <div className="contact-card">
            <FaGithub className="contact-icon" />
            <p>
              <strong>GitHub:</strong>
              <br />
              <a
                href="https://github.com/manimaran0406"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/manimaran0406
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
