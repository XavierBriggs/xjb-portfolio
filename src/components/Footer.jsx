import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-left">
        Designed & Developed by Xavier Briggs
      </div>

      <div className="footer-center">
        Copyright © {currentYear} XB
      </div>

      <div className="footer-right">
        <ul className="footer-social-links">
          <li>
            <a
              href="https://github.com/XavierBriggs"
              className="social-icon-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Xavier Briggs GitHub Profile"
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
              aria-label="Xavier Briggs LinkedIn Profile"
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
              aria-label="Xavier Briggs Twitter Profile"
            >
              <FontAwesomeIcon icon={faTwitter} size='lg' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;