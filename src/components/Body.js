import RestaurantCard from "./RestaurantCard";
import { fruitList } from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {fruitList.map((item) => (
          <RestaurantCard key={item.id} cardList={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
