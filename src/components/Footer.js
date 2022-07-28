import React from "react";
import {FaEnvelope,FaTwitter,FaLinkedin, FaMobile, FaInstagram} from 'react-icons/fa'



function Footer() {
  return (
    // <div className="main-footer">
      <div className="container">
        <div className="row-footer">
        {/* collum1 */}
        <div className="col">
          <h2 className="footerh2">JollyBee Restaurant</h2>
          <ul className="unstyledlist">
          <li>664-7474-829</li>
          <li>Nairobi, Kenya</li>
          <li>7513, Nairobi</li>
          </ul>

        </div>

        {/* collum1 */}
        <div className="col">
          <h2 className="footerh2">ChEF</h2>
          <ul className="unstyledlist">
          <li>Dennis Kiprop</li>
          <li>Beverlyn Rutto</li>
          <li>Jerusha Koskei</li>
          </ul>
          
        </div>
        {/* collum1 */}
        <div className="col">
          <h2 className="footerh2">Contact Us</h2>
          <ul className="unstyledlist">
          <li><FaTwitter/>Twitter</li>
          <li><FaLinkedin/>LinkedIn</li>
          <li><FaInstagram/>Instagram</li>
          <li><FaEnvelope/> denniskiprop25@gmail</li>
          <li><FaMobile/> +254715886876</li>
          </ul>
          
        </div>

        </div>
        <hr/>
        <div className="row">
          <p className="paragraph">
            &copy;{new Date().getfullYear} JOLLYBEE RESTAURANT | All rights reserved | Terms of service | Privacy
          </p>

        </div>

      </div>

    // </div>
    
  )
}

export default Footer;
