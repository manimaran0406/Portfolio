import './Hero.css';
import profileImg from '../about-profile.jpg'; // Replace with your image

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>HI, I'M <span className="name-highlight">MANIMARAN P!</span></h1>
          <h2>
            CREATIVE <span className="role-highlight">CODER</span>
          </h2>
          <p>
            I'm a passionate Full Stack Developer with a mission to create delightful and intuitive digital experiences.
            With a strong foundation in both backend and frontend technologies, I specialize in translating complex ideas
            into scalable applications that deliver impact.
          </p>
          <div className="hero-buttons">
            <a href="../Manimaran P.pdf" download className="btn download-btn">Download CV</a>
           
          </div>
        </div>
        <div className="hero-image">
          <img src={profileImg} alt="Manimaran" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
