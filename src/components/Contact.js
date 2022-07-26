import React from 'react'
import {FaEnvelope,FaTwitter,FaLinkedin, FaMobile} from 'react-icons/fa'
import styled from 'styled-components'
import Footer from "./Footer";

// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


const ContactUs=styled.div`
display:flex;
justify-content:space-around;
align-items:center;
height:50vh;
`
const Header=styled.div`
display:flex;
justify-content:center;
align-items:center;
font-size:3rem;

`
const Icons=styled.div`
width:40%;
background-color:red;

`
const FooterContainer=styled.div`
display: flex;
flex-direction: row;
background-color: black;
color: white;
padding: 5rem;
justify-content: space-between;
align-items: center;
`

function Contact() {
  return (
    <div>
      <Header>Contact Us</Header>
      <ContactUs>
      <Icons>
        <h1>Contact Information</h1>
      <h3>Nairobi, Kenya</h3>
      <label><i><FaEnvelope/></i>Email</label><br/>
      <label><i><FaTwitter/></i>Twitter</label><br/>
      <label><i><FaLinkedin/></i>LinkedIn</label><br/>
      <label><i><FaMobile/></i>+254715886876</label><br/>
      </Icons>
      <div className='contactForm'>
        <h1>Leave us a message</h1>
        <form>
        <input name='' type='text' placeholder='Name'/><br/><br/>
        <input name='' type='email' placeholder='Email'/><br/><br/>
        <textarea type='text'/><br/><br/>
        <button>Submit</button>
        </form>
      </div>
      </ContactUs>
      <FooterContainer>
      <Footer/>
      </FooterContainer>
      
    </div>
  )
}

export default Contact