import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resList, setResList] = useState(null);
  const { resName } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resName);
    const json = await data.json();
    console.log(json);

    setResList(json);
  };

  if (resList === null) return <Shimmer />;

  const { name, order } = resList;
  return (
    <div>
      <h1>Restaurant Name: {name}</h1>
      <div>{order}</div>
    </div>
  );
};

export default RestaurantMenu;
