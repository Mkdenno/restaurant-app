import React from 'react'
import {FaEnvelope,FaTwitter,FaLinkedin} from 'react-icons/fa'
import styled from 'styled-components'
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

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
      
    </div>
  )
}

export default Contact