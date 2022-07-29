import React, { useState } from "react";

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
function FoodList({ name, price, description, image }) {
  // const { name, price, description,image } = foodIt;
  const [isShow, setShow]=useState(false)
  const [likes, setLikes]=useState(0)


const handleOrder=()=>{
setShow((isShow)=>!isShow)
}

const handleLikeClick=()=>{
setLikes(likes + 1)
}
  return (
    <>
    <div className="foodcontainer">
      <img className="foodimage" src={image} alt="" />
      <h4 className="pricecolor">
        <strong>Name:</strong>
        {name}
      </h4>
      <p>
        <strong>Description:</strong>
        {description}
      </p>
      <h4 className="pricecolor">
        <strong >Price-</strong>
        {price}
      </h4>
      <div className="orderbutton">
      <button className={isShow ? "order":"ordered"} onClick={handleOrder} >
        {isShow ? "ordered" : "Order Now"}
      </button>
      <span className="Likes" ><span class="loveEmoji" onClick={handleLikeClick}>{likes? FULL_HEART:EMPTY_HEART}</span>
        likes:{likes}
      </span>
      </div>



    </div>
    


    </>
  );
  //Mark as read
}

export default FoodList;
