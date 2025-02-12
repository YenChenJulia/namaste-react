import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [options, setOptions] = useState([]);
  const [optionsAfterSearch, setOptionsAfterSearch] = useState([]);
  const [searchText, setSearchText] = useState("");

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
		setOptionsAfterSearch(json)
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  return options.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            onClick={() => {
              const searchResult = options.filter((option) =>
                option.name.toLowerCase().includes(searchText.toLocaleLowerCase())
              );
              setOptionsAfterSearch(searchResult);
            }}
          >
            Search
          </button>
        </div>
        <button onClick={sugarHighPick}>sugar high fruits</button>
      </div>
      <div className="res-container">
        {optionsAfterSearch.map((item) => (
          <RestaurantCard key={item.id} cardList={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
