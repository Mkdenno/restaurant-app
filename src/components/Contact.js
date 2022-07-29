import React from 'react'
import {FaEnvelope,FaTwitter,FaLinkedin, FaMobile} from 'react-icons/fa'
import styled from 'styled-components'
import Footer from "./Footer";

// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


const Header=styled.div`
display:flex;
justify-content:center;
align-items:center;
font-size:3rem;

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
// const sendEmail=(e)=>{
// e.preventDefault()
// emailjs.sendForm("service_v0u8lm6","template_ux67evm",e.target,"user_id")
// .then(res=>console.log(res))

// }
return (
<div>
<Header>Contact Us</Header>
<div className='ContactUs'>
<div className='iconsf'>
<h1>Contact Information</h1>
<h3>Nairobi, Kenya</h3>
<label><i><FaEnvelope/></i>denniskiprop25@gmail.com</label><br/>
<label><i><FaTwitter/></i>Twitter</label><br/>
<label><i><FaLinkedin/></i>LinkedIn</label><br/>
<label><i><FaMobile/></i>+254715886876</label><br/>
</div>

<div className='contactForm'>
<h1>Leave us a message</h1>
<form >
<input name='name' type='text' placeholder='Name'/><br/><br/>
<input name='user_email' type='email' placeholder='Email'/><br/><br/>
<textarea name='message' type='text'/><br/><br/>
<button type='submit' value="Send">Submit</button>
</form>
</div>
<div className='mapping'>
<img src='./image/map.jpg' alt='image'/>
</div>
</div>
<FooterContainer>
<Footer/>
</FooterContainer>
</div>
)
}

export default Contact
