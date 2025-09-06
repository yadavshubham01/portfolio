import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import yourImage from '../assets/images/me.jpg'
function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={yourImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a id="icons" href="https://github.com/yadavshubham01" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a id="icons" href="https://www.linkedin.com/in/shubham-yadav01" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Shubham Yadav</h1>
          <p>Software Engineer</p>

          <div className="mobile_social_icons">
            <a id="icons" href="https://github.com/yadavshubham01" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a id="icons" href="https://www.linkedin.com/in/shubham-yadav01" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;