import React from 'react';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Highlights from './Highlights';
import Testimonials from './Testimonials';

function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Highlights />
      <Testimonials />
    </div>
  );
}

export default Home;
