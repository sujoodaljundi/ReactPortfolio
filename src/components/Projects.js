import React from 'react';

const Projects = () => {
    return (
        <section id="projects">
            <h1>-Projects-</h1>

            <div className="project">
                <h2>Quickbit</h2>
                <p>This project is an online restaurant platform where I worked on the front-end, back-end, database, and design to create a seamless user experience.</p>
                <div className="project-images">
                    <img src={process.env.PUBLIC_URL + '/assets/project1.jpg'} alt="Quickbit Image 1" />
                    <img src={process.env.PUBLIC_URL + '/assets/project1-2.jpg'} alt="Quickbit Image 2" />
                    <img src={process.env.PUBLIC_URL + '/assets/project1-3.jpg'} alt="Quickbit Image 3" />
                    <img src={process.env.PUBLIC_URL + '/assets/project1-4.jpg'} alt="Quickbit Image 4" />
                </div>
            </div>

            <div className="project">
                <h2>Booking Clone</h2>
                <p>A functional clone of the popular booking website with search and reservation features.</p>
                <div className="project-images">
                    <img src={process.env.PUBLIC_URL + '/assets/project2.png'} alt="Booking Clone Image 1" />
                    <img src={process.env.PUBLIC_URL + '/assets/project2-1.png'} alt="Booking Clone Image 2" />
                    <img src={process.env.PUBLIC_URL + '/assets/project2-3.png'} alt="Booking Clone Image 3" />
                    <img src={process.env.PUBLIC_URL + '/assets/project2-4.png'} alt="Booking Clone Image 4" />
                </div>
            </div>

            <div className="project">
                <h2>FITZOON</h2>
                <p>Is an innovative e-commerce platform offering football enthusiasts top-quality player shirts at competitive prices. Developed collaboratively by our team, it features a personalized shopping experience, and advanced search options.</p>
                <div className="project-images">
                    <img src={process.env.PUBLIC_URL + '/assets/fitzoon1.jpg'} alt="FITZOON Image 1" />
                    <img src={process.env.PUBLIC_URL + '/assets/fitzoon2.jpg'} alt="FITZOON Image 2" />
                    <img src={process.env.PUBLIC_URL + '/assets/fitzoon3.jpg'} alt="FITZOON Image 3" />
                    <img src={process.env.PUBLIC_URL + '/assets/fitzoon4.jpg'} alt="FITZOON Image 4" />
                </div>
            </div>

            <div className="project">
                <h2>Admin Dashboard</h2>
                <p>It allows managers to efficiently manage content, track orders, and oversee users easily and effectively.</p>
                <div className="project-images">
                    <img src={process.env.PUBLIC_URL + '/assets/dash1.jpg'} alt="Admin Dashboard Image 1" />
                    <img src={process.env.PUBLIC_URL + '/assets/dash2.jpg'} alt="Admin Dashboard Image 2" />
                    <img src={process.env.PUBLIC_URL + '/assets/dash3.jpg'} alt="Admin Dashboard Image 3" />
                    <img src={process.env.PUBLIC_URL + '/assets/dash4.jpg'} alt="Admin Dashboard Image 4" />
                </div>
            </div>

            <div className="project">
                <h2>GOmovies</h2>
                <p>It offers a seamless cinematic experience with secure login, easy movie search, detailed info, favorites management, and mobile-friendly browsing.</p>
                <div className="project-images">
                    <img src={process.env.PUBLIC_URL + '/assets/gomovies1.jpg'} alt="GOmovies Image 1" />
                    <img src={process.env.PUBLIC_URL + '/assets/gomovies2.jpg'} alt="GOmovies Image 2" />
                    <img src={process.env.PUBLIC_URL + '/assets/gomovies3.jpg'} alt="GOmovies Image 3" />
                    <img src={process.env.PUBLIC_URL + '/assets/gomovies4.jpg'} alt="GOmovies Image 4" />
                </div>
            </div>
        </section>
    );
}

export default Projects;
