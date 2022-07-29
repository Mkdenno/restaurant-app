import React from 'react'
import Footer from './Footer'
import styled from 'styled-components'

const FooterContainer=styled.div`
display: flex;
flex-direction: row;
background-color: black;
color: white;
padding: 5rem;
justify-content: space-between;
align-items: center;
`
const Header=styled.div`
display:flex;
justify-content:center;
align-items:center;
font-size:3rem;

`

function About() {
  return (
    <div>
      <Header>About Us</Header>

         <div className='aboutpage'>
      <div className='aboutimage'>
      <img src='./image/dennis.jpeg' alt='image'/>
      </div>
      <div className='aboutMore'>
        <h1>About our Restaurant</h1>
        <h2>We provide Good quality food to our customers!!</h2>
        <p>We provide Good quality food to our customers We provide
           Good quality food to our customers We provide Good quality food to
            our customers We provide Good quality food to our customers</p>

            <button className='aboutbutton'>Learn More</button>
      </div>

    </div>
    <FooterContainer>
          <Footer/>
          </FooterContainer>
    </div>
 

  )
}

export default About