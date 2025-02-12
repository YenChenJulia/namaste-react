import RestaurantCard from "./RestaurantCard";
import { fruitList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [options, setOptions] = useState(fruitList);
  function sugarHighPick() {
    const filteredFruits = options.filter(
      (option) => option.nutritions.sugar > 10
    );
    setOptions(filteredFruits);
    console.log(options);
  }
  return (
    <div className="body">
      <div className="filter">
        {/* <button onClick={() => sugarHighPick()}>sugar high fruits</button> */}
        <button onClick={sugarHighPick}>sugar high fruits</button>
      </div>
      <div className="res-container">
        {options.map((item) => (
          <RestaurantCard key={item.id} cardList={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
