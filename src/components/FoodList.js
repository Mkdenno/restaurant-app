import React from "react";

function Poem({ name, price, description,image }) {
  // const { name, price, description,image } = foodIt;


  return (
    <div className="foodcontainer">
      <img className="foodimage" src={image} alt=""/>
      <h1><strong>Name:</strong>{name}</h1>
      <p><strong>Description:</strong>{description}</p>
      <h2><strong>Price-</strong>{price}</h2>
      <button className="orderbutton">Order Now</button>
    </div>
  );
  //Mark as read
}

export default Poem;
