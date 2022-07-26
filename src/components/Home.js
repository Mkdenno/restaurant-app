import React from 'react'
import Footer from "./Footer";
import styled from 'styled-components';


const FooterContainer=styled.div`
display: flex;
flex-direction: row;
background-color: black;
color: white;
padding: 5rem;
justify-content: space-between;
align-items: center;
`
function Home() {
  return (
    <div  className='homecontainer'>
        <div className='homeinfo'>
            <h1><span className='span'>JOLLYBEE </span> RESTAURANT</h1>
            <h2>Walk in Or make an order</h2>
            <p>Delicious Dishes</p>
        </div>
        <FooterContainer>
      <Footer/>
      </FooterContainer>
    </div>

  )
}

export default Home