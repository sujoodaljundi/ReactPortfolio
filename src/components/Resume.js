import React from 'react';

const Resume = () => {
    return (
        <section id="resume">
            <h1>Here’s My Resume – Let’s Work Together!</h1>
            <div className="resume-download">
                <p>If you'd like to know more about my experience and skills, feel free to download my resume!</p>
                <a href="../Sujood Aljundi updated.pdf" className="btn btn-primary" download>
                    📄 Download My Resume
                </a>
            </div>
        </section>
    );
}

export default Resume;
