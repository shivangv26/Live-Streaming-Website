import React from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="social-links">
        <a href="https://github.com/shivangv26" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/shivangv26/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <FaLinkedin />
        </a>
        <a href="https://leetcode.com/shivangv26" target="_blank" rel="noopener noreferrer" aria-label="LeetCode Profile">
          <FaCode />
        </a>
      </div>
      <p className="footer-text">
        Developed by Shivang Verma
      </p>
    </footer>
  );
}

export default Footer;