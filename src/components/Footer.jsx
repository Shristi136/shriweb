import React from 'react';

export const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About Me</h3>
          <p>
            I'm a passionate web developer specializing in the MERN stack, always eager to learn new
            technologies and create innovative web solutions.
          </p>
        </div>
        
        <div className="footer-links">
          <h3>Contact Me</h3>
          <p>Email: <a href="mailto:your.email@example.com">shristiverma1306@gmail.com</a></p>
          <p>Phone: <a href="tel:+1234567890">91+ 9873698426</a></p>
        </div>
        
        <div className="footer-social">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your ShristiVerma. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
};


