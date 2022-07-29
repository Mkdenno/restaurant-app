import React, { useState } from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";

function FoodList({ name, price, description, image }) {
  // const { name, price, description,image } = foodIt;
  const [isShow, setShow]=useState(false)


const handleOrder=()=>{
setShow((isShow)=>!isShow)
}
  return (
    <>
    <div className="foodcontainer">
      <img className="foodimage" src={image} alt="" />
      <h1 className="pricecolor">
        <strong>Name:</strong>
        {name}
      </h1>
      <p>
        <strong>Description:</strong>
        {description}
      </p>
      <h2 className="pricecolor">
        <strong>Price-</strong>
        {price}
      </h2>
      <div className="orderbutton">
      <button className={isShow ? "order":"ordered"} onClick={handleOrder} >
        {isShow ? "ordered Successfully" : "Order Now"}
      </button>
      </div>


    </div>
    


    </>
  );
  //Mark as read
}

export default FoodList;
