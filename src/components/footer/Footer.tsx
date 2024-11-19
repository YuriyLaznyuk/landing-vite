import React, { useEffect } from "react";
import "./Footer.scss";
import Logo from "../../assets/img/Logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Footer(): React.JSX.Element {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <footer className="footer">
      <div className="footer__container wrapper" data-aos="fade-up">
        <div className="footer__col">
          <img src={Logo} alt="Logo" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        </div>
        <div className="footer__col">
          <h3>About</h3>
          <a href="#">about us</a>
          <a href="#">features</a>  
          <a href="#">news</a>
        </div>

        <div className="footer__col">
          <h3>Company</h3>
          <a href="#">Crytocode</a>
          <a href="#">Security</a>  
          <a href="#">Rankings</a>
        </div>

        <div className="footer__col">
          <h3>Support</h3>
          <a href="#">FAQs</a>
          <a href="#">Support</a>  
          <a href="#">Contact</a>
        </div>
        <div className="footer__col">
            <h3>Socialis</h3>
            <div className="footer__icons">
                <a href="#" className="footer__icon">
                    <FaFacebookF/>
                </a>
                <a href="#" className="footer__icon">
                    <FaTwitter/>
                </a>
                <a href="#" className="footer__icon">
                    <FaLinkedinIn/>
                </a>
                <a href="#" className="footer__icon">
                    <FaInstagram/>
                </a>
                <a href="#" className="footer__icon">
                    <FaYoutube/>
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
}
