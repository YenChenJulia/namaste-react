const RestaurantCard = ({ cardList }) => {
  return (
    <div className="bg-gray-300">
      <img
        className="w-52 m-3"
        alt="res-logo"
        src="https://img.freepik.com/free-photo/chicken-skewers-with-onions-top-salad_1220-567.jpg?semt=ais_hybrid"
      ></img>
      <h3 className="font-bold">{cardList.name}</h3>
      <h4>{cardList.order}</h4>
      <div className="nutrition">
        <h6 className="fat">fat: {cardList.nutritions.fat}</h6>
        <h6 className="sugar">sugar: {cardList.nutritions.sugar}</h6>
      </div>
    </div>
  );
};

export const withoutFat = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white mx-1 p-1">No fat</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
