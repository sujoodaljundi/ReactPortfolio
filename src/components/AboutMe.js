import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faPlane, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

// Function component for AboutMe
const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="container">
        <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="Profile" className="profile-pic" />
        <div className="text-content">
          <h1>Know Who I'M</h1>
          <p>Hi Everyone, I am Sujood Al-Jundi from Jordan. I am currently a full-stack developer, and I have a background in Computer Engineering.</p>
          <p>Apart from coding, here are some activities that I love to do:</p>
          <ul>
            <li><FontAwesomeIcon icon={faBook} /> Reading</li>
            <li><FontAwesomeIcon icon={faPlane} /> Travelling</li>
            <li><FontAwesomeIcon icon={faGraduationCap} /> Learning</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
