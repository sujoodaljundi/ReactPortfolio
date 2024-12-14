// src/components/Services.js
import React from 'react';

function Services() {
  return (
    <section id="services_section" className="glassmorphism">
      <h2>- Services -</h2>

      <div className="glassmorphism-card">
        <h2>Static Web Design</h2>
        <p>Design static web pages using HTML and CSS with a focus on cross-device compatibility.</p>
      </div>

      <div className="glassmorphism-card">
        <h2>Web Page Styling</h2>
        <p>Enhance the look and feel of web pages using CSS to provide an engaging experience.</p>
      </div>

      <div className="glassmorphism-card">
        <h2>Building Web Layouts</h2>
        <p>Create and design professional web structures using HTML and CSS.</p>
      </div>

      <div className="glassmorphism-card">
        <h2>Responsive Design</h2>
        <p>Develop responsive websites that work smoothly on all screen sizes.</p>
      </div>
    </section>
  );
}

export default Services;
