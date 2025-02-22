import React from "react";
import Foto from '../assets/images/Portfoliopfp.jpeg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={Foto} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Bryan-Asanovic" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/bryan-asanovic-418463246/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Bryan Asanovic</h1>
          <p>Software Developer Student</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Bryan-Asanovic" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/bryan-asanovic-418463246/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;