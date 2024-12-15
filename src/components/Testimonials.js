import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What People Say About Me</h2>
      <p className="testimonials-description">Here are some testimonials from my clients:</p>
      <div className="testimonials-container">
        <div className="testimonial-card">
        <img src={process.env.PUBLIC_URL + '/assets/test1.png'}alt="Sarah Johnson" className="testimonial-image" />
          <blockquote>
            <p>"Sujood Al-jundi is incredibly hardworking and dedicated. Their creativity shines through in every project!"</p>
          </blockquote>
          <h3>- Sarah Johnson</h3>
        </div>
        <div className="testimonial-card">
          <img src={process.env.PUBLIC_URL + '/assets/test2.png'} alt="Michael Thompson" className="testimonial-image" />
          <blockquote>
            <p>"I am always impressed by Sujood's ability to think outside the box and deliver unique solutions under pressure."</p>
          </blockquote>
          <h3>- Michael Thompson</h3>
        </div>
        <div className="testimonial-card">
          <img src={process.env.PUBLIC_URL + '/assets/test3.png'} alt="Emily Davis" className="testimonial-image" />
          <blockquote>
            <p>"Sujood exceeded my expectations with the work you did on my website. The design is sleek, and the functionality is top-notch!"</p>
          </blockquote>
          <h3>- Emily Davis</h3>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
