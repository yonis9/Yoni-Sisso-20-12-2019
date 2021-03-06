import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div id='footer'>
            <h3>Please note that the app can handle only 50 weather foracst requests a day</h3>
            <div id='social'>
                <a href='https://github.com/yonis9' target='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href='https://www.linkedin.com/in/yonisisso/' target='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
        </div>
    )
}

export default Footer;