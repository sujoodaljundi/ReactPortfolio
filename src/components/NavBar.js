import React, { useState } from "react";

function NavBar() {
  const [activeLink, setActiveLink] = useState("#hero");

  return (
    <nav>
      <a href="#">
        <img
          src={`${process.env.PUBLIC_URL}/assets/logo.png`}
          alt="logo"
          id="logo"
        />
      </a>
      <ul className="navbar">
        <li>
          <a
            href="#hero"
            className={activeLink === "#hero" ? "active" : ""}
            onClick={() => setActiveLink("#hero")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#services_section"
            className={activeLink === "#services_section" ? "active" : ""}
            onClick={() => setActiveLink("#services_section")}
          >
            Service
          </a>
        </li>
        <li>
          <a
            href="#skills_section"
            className={activeLink === "#skills_section" ? "active" : ""}
            onClick={() => setActiveLink("#skills_section")}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={activeLink === "#projects" ? "active" : ""}
            onClick={() => setActiveLink("#projects")}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#testimonials"
            className={activeLink === "#testimonials" ? "active" : ""}
            onClick={() => setActiveLink("#testimonials")}
          >
            Testimonials
          </a>
        </li>
        <li>
          <a
            href="https://github.com/sujoodaljundi/Solve_html_css_task"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/git branch.png`}
              alt="Branch Icon"
              style={{ width: "24px", height: "24px" }}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
