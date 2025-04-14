// src/components/Footer/Footer.js (Example path)
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './styles/Footer.css'; // Import CSS file for styling

function Footer() {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    // Use semantic footer element
    <footer className="footer-container">
      {/* Column 1: Designed by */}
      <div className="footer-left">
        Designed & Developed by Xavier Briggs
      </div>

      {/* Column 2: Copyright */}
      <div className="footer-center">
        {/* Use copyright symbol and dynamic year */}
        Copyright © {currentYear} XB
      </div>

      {/* Column 3: Social Links */}
      <div className="footer-right">
        <ul className="footer-social-links">
          <li>
            <a
              href="https://github.com/XavierBriggs"
              className="social-icon-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Xavier Briggs GitHub Profile" // Accessibility
            >
              <FontAwesomeIcon icon={faGithub} size='lg' />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/xavierbriggs05/"
              className="social-icon-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Xavier Briggs LinkedIn Profile" // Accessibility
            >
              <FontAwesomeIcon icon={faLinkedin} size='lg' />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/XBriggs89727"
              className="social-icon-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Xavier Briggs Twitter Profile" // Accessibility
            >
              <FontAwesomeIcon icon={faTwitter} size='lg' />
            </a>
          </li>
          {/* Add other social links here if needed */}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;