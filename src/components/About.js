import "./About.css";
import profilePic from "../about-profile.jpg"; // Update if your path is different

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>
        <div className="about-text">
          <h2>
            <span className="highlight">About Me</span> <span className="emoji">🌸</span>
          </h2>
          <p>
            Hey there! 👋 I'm a passionate web developer who loves building clean, interactive, and modern web experiences. 
            This portfolio is a glimpse into my creative journey!
          </p>
          <p>
            Outside of code, you'll catch me gaming 🎮, reading 📚, or exploring new tech trends. Got cool book or game suggestions? Let's connect!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
