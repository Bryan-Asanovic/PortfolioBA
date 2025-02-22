import React from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <Box className='contact-info'>
            <p><strong>Email:</strong> <a href="mailto:B.Asanovic05@gmail.com">B.Asanovic05@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+31680109222">+31680109222</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/bryan-asanovic-418463246/" target="_blank" rel="noopener noreferrer">linkedin.com/in/bryan-asanovic</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/Bryan-Asanovic" target="_blank" rel="noopener noreferrer">github.com/Bryan-Asanovic</a></p>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;