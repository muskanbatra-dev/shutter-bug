import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__items">
        <p className="footer__text">Made with 💜 by Muskan Batra</p>
        <div className="footer__links">
          <p>
            <FaGithub size={20} color="white" />
          </p>
          <p>
            <FiTwitter size={20} color="white" />
          </p>
          <p>
            <FaLinkedin size={20} color="white" />
          </p>
        </div>
        <p className="footer__copyright">@ShutterBug</p>
      </div>
    </div>
  );
};

export default Footer;
