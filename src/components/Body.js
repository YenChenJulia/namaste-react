import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [options, setOptions] = useState([]);

  function sugarHighPick() {
    const filteredFruits = options.filter(
      (option) => option.nutritions.sugar > 10
    );
    setOptions(filteredFruits);
  }

  const fetchFruits = async () => {
    const data = await fetch("https://www.fruityvice.com/api/fruit/all");
    const json = await data.json();
    setOptions(json);
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  if (options.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
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
