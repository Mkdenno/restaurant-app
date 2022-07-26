import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaTwitter, FaLinkedin, FaMobile } from "react-icons/fa";

const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Footer() {
  return (
    <Icons className="footericons">
      <div className="heading">
        <h1>Contact Information</h1>
        <h3>Nairobi, Kenya</h3>
      </div>
      <label>
        <i>
          <FaEnvelope />
        </i>
        denniskiprop25@gmail.com
      </label>
      <br />

      <label>
        <i>
          <FaTwitter />
        </i>
        Twitter
      </label>
      <br />
      <label>
        <i>
          <FaLinkedin />
        </i>
        LinkedIn
      </label>
      <br />
      <label>
        <i>
          <FaMobile />
        </i>
        +254715886876
      </label>
      <br />
    </Icons>
  );
}

export default Footer;
