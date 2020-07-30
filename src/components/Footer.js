import React from 'react'

import FooterStyles from "./styles/footerStyles";

const Footer = () => {
    return(
        <FooterStyles>
        <div className="footer-div">
            
            <h5>Created by John W Nicholson</h5>
            <h6>On Github: <a href="https://github.com/JWNicholson" target="_blank" rel="noopener noreferrer">@JWNicholson</a></h6>
          
        </div>
        </FooterStyles>
    )
}

export default Footer