import React from "react";
import './Footer.css';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
      <div class="body-footer">
        <footer className="footer">
        <div className="container-footer">
          <div className="row">
            <div className="footer-col">
              <h4>Contacts</h4>
              <ul>
                <li>Galeriasophilia@gmail.com</li>
                <li>0821-2555-5620</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Address</h4>
              <ul>
                <li>
                  Calvin Tower Lt.6-7, Jl. Industri
                  <br />
                  Raya Blok B14 Kav.1, Kemayoran,
                  <br />
                  RW.10, East Pademangan,
                  <br />
                  Pademangan, North Jakarta
                  <br />
                  City, Jakarta 10720
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Operational Hour</h4>
              <ul>
                <li>Sunday 12.00 - 15.00 WIB</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Social Media</h4>
              <div className="social-links">
                <a href="https://www.instagram.com/galeriasophilia/?hl=id">
                  <FaInstagram/>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=6282125555620&text&type=phone_number&app_absent=0">
                  <FaWhatsapp/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    );
  };
  
  export default Footer;