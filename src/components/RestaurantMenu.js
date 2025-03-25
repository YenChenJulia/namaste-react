import Shimmer from "./Shimmer";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import userContext from "../utils/userContext";

const RestaurantMenu = () => {
  const resName = useParams();
  const resList = useRestaurantInfo(resName);
  const {loggedInUser} = useContext(userContext)

  if (resList === null) return <Shimmer />;

  const { name, order } = resList;
  const accordions = Object.keys(resList.nutritions);

  return (
    <div className="m-auto w-6/12 bg-gray-50">
      <h1 className="text-lg font-bold text-center">Restaurant Name: {name}</h1>
      <h3 className="text-center text-red-500">{loggedInUser}</h3>
      <div className="text-center">{order}</div>

      {accordions.map((c) => {
        return <ItemList accordion={c} key={c} />;
      })}
    </div>
  );
};

export default RestaurantMenu;
