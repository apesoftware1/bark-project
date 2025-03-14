import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      {/*Contact Section */}
      <div className="contact-section">
        <h2>Connect with Us</h2>
        <form>
          <input className="input-field" type="email" placeholder="Your Email" required />
          <textarea className="input-field" placeholder="Your Message" rows="5" required></textarea>
          <button className="btn-primary" type="submit">Stay Connected</button>
        </form>
      </div>

      {/* Footer Content */}
      <div className="footer-content">
        {/* Contact Info Column */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p><i className="fas fa-envelope"></i> support@apesoftwares.com</p>
          <p><i className="fas fa-phone-alt"></i> +123 456 7890 / 079 963 5216</p>
          <p><i className="fas fa-map-marker-alt"></i> 123 Business Rd, Melbourne</p>
        </div>

        {/* Quick Links Column */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#"><i className="fas fa-lock"></i> Privacy Policy</a></li>
            <li><a href="#"><i className="fas fa-file-contract"></i> Terms of Service</a></li>
            <li><a href="#"><i className="fas fa-question-circle"></i> FAQs</a></li>
          </ul>
        </div>

        {/* Social Links Column */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#"><img src="/assets/facebook-icon.png" alt="Facebook" /></a>
            <a href="#"><img src="/assets/twitter-icon.png" alt="Twitter" /></a>
            <a href="#"><img src="/assets/linkedin-icon.png" alt="LinkedIn" /></a>
            <a href="#"><img src="/assets/github-icon.png" alt="GitHub" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; 2025 Ape Softwares. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
