import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Footer() {
  return (
    <div id='FooterNav'>
      <ul>
        <h3>Connect with me on:</h3>
        <nav className="ms-auto">
          <a href="https://github.com/XavierBriggs" className="FooterItems" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size='lg'/>
          </a>
          <a href="https://www.linkedin.com/in/xavierbriggs05/" className="FooterItems" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size='lg'/>
          </a>
          <a href="https://x.com/XBriggs89727" className="FooterItems" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size='lg'/>
          </a>
        </nav>
        <p id='copyright'>Copyright © 2024 Xavier Briggs</p>
      </ul>
    </div>
  );
}

export default Footer;

//Could add hover effect