import React ,{useState,useEffect} from "react";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Comment from "./components/Comment";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import MenuList from "./components/MenuList"
import Footer from "./components/Footer";
const URL = "http://localhost:4000/foods";


// const url='http://localhost:4000/foods'
const RestContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  color: white;
  padding: 5rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

`;

const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 2rem;
`;
const Nav = styled.div`
  display: flex;
`;

const FooterContainer=styled.div`
display: flex;
flex-direction: row;
background-color: black;
color: white;
padding: 5rem;
justify-content: space-between;
align-items: center;
`
//fetching from Api
function App() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((food) => {
        setFoods(food);
      });
  },[]);
 
  // console.log(fooder)

  return (
    <RestContainer>
      <Header className="header">
        <AppName><span className="span"> Restaurant  </span>  Menu List App </AppName>
        <Nav>
          <NavBar />
        </Nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menuList" element={<MenuList foods={foods} />} />
        <Route path="/about" element={<About />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FooterContainer>
      <Footer/>
      </FooterContainer>
    </RestContainer>
  );
}

export default App;
