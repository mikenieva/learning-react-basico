import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">KYGO</div>
                <div className="footer_copyright">
                    All rights reserved. 2019. 
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;