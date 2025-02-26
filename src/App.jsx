import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './App.css';

// Reusable Section component with fade in/out effects
const Section = ({ children, id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.start('hidden');
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      id={id}
      className="section section-gradient"
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.section>
  );
};

const Header = () => (
  <header className="header">
    <div className="header-content">
      <h1 className="logo">Vandith Manohar</h1>
      <nav className="nav">
        {['about', 'projects', 'contact'].map((item) => (
          <a key={item} href={`#${item}`} className="nav-link">
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

const About = () => (
  <div className="section-content about-content">
    <div className="about-text">
      <h2>About Me</h2>
      <p>
        Motivated second-year Computer Science and Engineering student at KL University with a passion for new tech.
        Actively preparing for certifications, eager to gain hands-on experience.
        Full-stack developer passionate about creating modern web experiences.
      </p>
      <div className="slider">
        <div className="skills">
          {['React', 'Node.js', 'TypeScript', 'Genai', 'HTML', 'CSS', 'JAVA', 'C++', 'Spline', 'Figma'].map(skill => (
            <span key={skill} className="skill-chip">{skill}</span>
          ))}
        </div>
      </div>
    </div>
    <div className="profile-image">
      {/* Make sure this image is in public/images/profile.jpg */}
      <img src="images\pic.jpg" alt="Profile" className="profile-img" />
    </div>

  </div>
);

const Projects = () => {
  // Sample projects data (update as needed)
  const projectData = [
    { name: 'Aero Hive', description: 'Contributed to the website for a startup in my college called Aero Hive.' },
    { name: 'AI Visual Quiz', description: 'Created during a 4-hour hackathon by Igebra.ai to help users learn through images.' },
    { name: 'Pill Pack', description: 'Interactive e-commerce site for medicines with prescription management.' }
  ];

  return (
    <div className="section-content">
      <h2>Projects</h2>
      <div className="projects-flex">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              {/* Ensure your project images are in public/images/y1.jpg, y2.jpg, y3.jpg */}
              <img
                src={`images/y${index + 1}.jpg`}
                alt={`Project ${project.name}`}
                className="project-img"
              />
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Contact = () => (
  <div className="section-content">
    <h2>Contact</h2>
    <form id="contact" className="contact-flex">
      <div className="input-group">
        <input type="text" placeholder="Name" required />
      </div>
      <div className="input-group">
        <input type="email" placeholder="Email" required />
      </div>
      <div className="input-group">
        <textarea placeholder="Message" rows="5" required />
      </div>
      <button type="submit">Send Message</button>
    </form>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-flex">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
        LinkedIn
      </a>
      <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="social-link">
        Twitter
      </a>
    </div>
  </footer>
);

const App = () => {
  const [entered, setEntered] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);

  const handleEnterClick = () => {
    setEntered(true);
  };

  if (!entered) {
    return (
      <div className="splash">
        <div className="spline-container">
          <Spline
            scene="https://prod.spline.design/SzDHK3EQKMXNsMtG/scene.splinecode"
            onLoad={() => setSplineLoaded(true)}
          />
        </div>
        <button 
          id="enterButton" 
          onClick={handleEnterClick}
          style={{ opacity: splineLoaded ? 1 : 0 }}
        >
          Want to Enter?
        </button>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main className="main-container">
        <Section id="about">
          <About />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
