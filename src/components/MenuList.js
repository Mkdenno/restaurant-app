import React from "react";
import FoodList from "./FoodList";

function MenuList({foods}) {

  const foodDisplay=foods.map((food) => (
    <FoodList
      key={food.id}
      food={food}
      image={food.image}
      name={food.name}
      description={food.description}
      price={food.price}
    />

  ))

  return (
    <div className="mainFoodcontainer">
      {foodDisplay}
    </div>
  );
}

export default MenuList;
