import RestaurantCard, { withoutFat } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import userContext from "../utils/userContext";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Body = () => {
  const [options, setOptions] = useState([]);
  const [optionsAfterSearch, setOptionsAfterSearch] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(userContext);

  const NoFatRestaurantCard = withoutFat(RestaurantCard);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart())
  };

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
            className="border rounded-sm"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="bg-gray-50 border rounded-sm px-1"
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
        <div>
          <label>User Name: </label>
          <input
            className="border px-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div>
        <button
          className="text-lg font-bold border bg-amber-600 cursor-pointer"
          onClick={() => handleClearCart()}
        >
          clear cart
        </button>
      </div>
      <div className="res-container flex flex-wrap">
        {optionsAfterSearch.map((item) => (
          <Link to={"/restaurant/" + item.id} key={item.id}>
            {item.nutritions.fat === 0 ? (
              <NoFatRestaurantCard cardList={item} />
            ) : (
              <RestaurantCard cardList={item} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
