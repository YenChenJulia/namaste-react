import Shimmer from "./Shimmer";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const resName = useParams()
  const resList = useRestaurantInfo(resName);

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
