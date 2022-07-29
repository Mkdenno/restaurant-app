import React from "react";
import FoodList from "./FoodList";
import Search from "./Search";

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
    <div className="bothfoodsearch">
      <div>
        <Search />
      </div>
    <div className="mainFoodcontainer">
      {foodDisplay}
    </div>
    </div>
  );
}

export default MenuList;
