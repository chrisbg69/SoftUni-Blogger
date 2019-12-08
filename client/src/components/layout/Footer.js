import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
      
    <MDBFooter  className="font-small bg-dark-nav">
      
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/chrisbg69/SoftUni-Blogger"> ChrisBG69 </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;