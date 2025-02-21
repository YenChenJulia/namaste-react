import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
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
    setOptionsAfterSearch(json);
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1> oops!! it seems you are offline!!!</h1>;
  }

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
                option.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
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
          <Link to={"/restaurant/" + item.id} key={item.id}>
            <RestaurantCard cardList={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
