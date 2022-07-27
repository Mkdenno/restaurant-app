import React from "react";

function Poem({ name, price, description,image }) {
  // const { name, price, description,image } = foodIt;
  
  const handleOrderbutton=()=>{
    console.log("Clicked")
  }


  return (
    <div className="foodcontainer">
      <img className="foodimage" src={image} alt=""/>
      <h1 className="pricecolor"><strong>Name:</strong>{name}</h1>
      <p><strong>Description:</strong>{description}</p>
      <h2 className="pricecolor"><strong>Price-</strong>{price}</h2>
      <button className="orderbutton" onClick={handleOrderbutton}>Order Now</button>
    </div>
  );
  //Mark as read
}

export default Poem;
