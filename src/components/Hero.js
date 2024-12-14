import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  return (
    <section id="hero">
      <div className="content">
        <h1>Hi There!👋</h1>
        <h2>I'm <span>Sujood Aljundi</span></h2>
        <h2>Computer engineer | <span>Full Stack</span> developer</h2>
        <h3>"Strive to build things that make a difference!"</h3><br />

        <a href="mailto:sujood.aljundi@gmail.com" className="email-button" target="_blank">Contact</a><br />
        <hr /><br />
        <p style={{ color: "#4c677d" }}>OR Find me at:</p>
        <a href="https://www.linkedin.com/in/sujood-al-jundi/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="social_icon" />
        </a>
        <a href="https://github.com/sujoodaljundi" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2x" className="social_icon" />
        </a>
        <a href="https://wa.me/+962785950356" target="_blank">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" className="social_icon" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
