import React from 'react';
import Header from '../components/Header';
import './About.css';


function About() {
  return (
    <div>
      <Header />
      <main>
        <section id="about">
          <div className="about-banner">
            <h1>About Us</h1>
            <p>Learn more about our journey, values, and what drives us to deliver excellence.</p>
          </div>
          <div className="about-content">
            <div className="about-info">
              <h2>Our Mission</h2>
              <p>
                We aim to provide top-notch services to our clients by combining creativity,
                technology, and a customer-centric approach.
              </p>
              <h2>Our Vision</h2>
              <p>
                To be the premier software development company, recognized for our commitment to excellence, creativity,
                and technological advancements that foster growth, efficiency, and innovation.
              </p>
              <h2>Core Values</h2>
              <ul>
                <li><strong>Innovation:</strong> Staying ahead with cutting-edge solutions.</li>
                <li><strong>Integrity:</strong> Transparency and trust in every project.</li>
                <li><strong>Quality:</strong> Commitment to excellence in everything we deliver.</li>
              </ul>
            </div>
            <div className="about-team">
              <h2>Meet the Team</h2>
              <div className="team-grid">
                <div className="team-member">
                  <div className="team-social-media">
                    <img src="/assets/IMG-20250129-WA0014.jpg" alt="Team Member" />
                    <h3>Swaryaletsang</h3>
                    <p>Founder of A.S</p>
                    <p>Back-End Developer</p>
                    <a href="https://www.linkedin.com/in/oarabetse">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/swaryaletsang">
                      <img src="/assets/github-icon.png" alt="GitHub" />
                    </a>
                  </div>
                </div>
                <div className="team-member">
                  <img src="/assets/IMG-20250129-WA0014.jpg" alt="Team Member" />
                  <h3>Thabo Kelvin Mahlonoko</h3>
                  <p>Front-End Developer</p>
                  <p>UI/UX Designer</p>
                  <div className="team-social-media">
                    <a href="https://linkedin.com/in/kelvin-thabo-6142a6321">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/kelvintroy">
                      <img src="/assets/github-icon.png" alt="GitHub" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="map">
            <h2>Our Office Location</h2>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.7088952891593!2d28.282479315520433!3d-25.40610418380107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebb35096b6c6dff%3A0x1d2a2fa1e6c57b03!2sHammanskraal%2C%20Pretoria%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1698360549276!5m2!1sen!2sus"
              width="100%" 
              height="400" 
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Office Location"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
