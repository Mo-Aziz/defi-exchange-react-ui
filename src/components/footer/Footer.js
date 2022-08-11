import React from "react";
import "./FooterStyles.css";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col  col-1">
          <h1>
            DeFi<span className="primary">nance</span>
          </h1>
        </div>
        {/* column 1 */}
        <div className="col" >
          <h5>Support</h5>
          <span className="bar"> </span>
            <a href="/"> Contact Us</a>
            <a href="/">Chat</a>
            <a href="/">Help Center</a>
            <a href="/">FAQ</a>
        </div>

        {/* column 2 */}
        <div className="col" >
          <h5>Developers</h5>
          <span className="bar"> </span>
            <a href="/"> Cloud</a>
            <a href="/">whitepaper</a>
            <a href="/">documentation</a>
            <a href="/">API</a>{" "}
          
        </div>
        {/* column 3 */}
        <div className="col">
          <h5>Company</h5>
          <span className="bar"> </span>
            <a href="/"> About</a>
            <a href="/">Information</a>
            <a href="/">Legal</a>
            <a href="/">Privacy</a>
         
        </div>

        {/* column 4 */}
        <div className="col">
          <h5>Social</h5>
          <span className="bar"> </span>
            <a href="/">
              <FaFacebook className="icon" />
            </a>

            <a href="/">
              <FaGithub className="icon" />
            </a>
            <a href="/">
              <FaLinkedin className="icon" />
            </a>
            <a href="/">
              <FaTwitter className="icon" />
            </a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
