import React from "react";


function Footer() {
  return (
    // <div className="main-footer">
      <div className="container">
        <div className="row-footer">
        {/* collum1 */}
        <div className="col">
          <h4>JollyBee Restaurant</h4>
          <ul className="unstyledlist">
          <li>+254715886876</li>
          <li>Nairobi, Kenya</li>
          <li>7513, Nairobi</li>
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
