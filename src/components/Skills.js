import React from 'react';

const Skills = () => {
  return (
    <section id="skills_section">
      <h2 className="skills-title">- My Skills -</h2>
      <p className="skills-description">I have developed my skills in web development, focusing on creating responsive and efficient designs. I am currently learning other languages to become a full stack developer.</p>
      <div className="skills-container">
        <div className="skill-card">
          <img src={process.env.PUBLIC_URL + '/assets/css.png'} alt="CSS Skill" />
          <div className="skill-content">
            <div className="skill-name">CSS</div>
            <div className="skill-description">Styling for Web</div>
          </div>
        </div>
        <div className="skill-card">
          <img src={process.env.PUBLIC_URL + '/assets/html.png'} alt="HTML Skill" />
          <div className="skill-content">
            <div className="skill-name">HTML</div>
            <div className="skill-description">Web Structure</div>
          </div>
        </div>
        <div className="skill-card">
          <img src={process.env.PUBLIC_URL + '/assets/js.png'} alt="JavaScript Skill" />
          <div className="skill-content">
            <div className="skill-name">JavaScript</div>
            <div className="skill-description">Dynamic Web Interactions</div>
          </div>
        </div>
        <div className="skill-card">
          <img src={process.env.PUBLIC_URL + '/assets/php.png'} alt="PHP Skill" />
          <div className="skill-content">
            <div className="skill-name">PHP</div>
            <div className="skill-description">Server-side Scripting</div>
          </div>
        </div>

      </div>
      <div className="skills-container">
        <div className="skill-card">
          <img src={process.env.PUBLIC_URL + '/assets/laravel.png'} alt="Laravel Skill" />
          <div className="skill-content">
            <div className="skill-name">Laravel</div>
            <div className="skill-description">Backend Development</div>
          </div>
        </div>
        <div className="skill-card">
          <img src={process.env.PUBLIC_URL + '/assets/react.png'} alt="React Skill" />
          <div className="skill-content">
            <div className="skill-name">React</div>
            <div className="skill-description">Frontend Framework</div>
          </div>
        </div>

        <div className="skill-card">
          <img src={process.env.PUBLIC_URL + '/assets/sql.png'} alt="SQL" />
          <div className="skill-content">
            <div className="skill-name">MySQL</div>
            <div className="skill-description">Database design & optimization</div>
            </div>
        </div>

        <div className="skill-card">
          <img src={process.env.PUBLIC_URL + '/assets/problem solving.png'} alt="Problem Solving Skill" />
          <div className="skill-content">
            <div className="skill-name">Problem Solving</div>
            <div className="skill-description">Analytical Thinking</div>
          </div>
        </div>
 

      </div>
    </section>
  );
}

export default Skills;
