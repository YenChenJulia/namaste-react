const RestaurantCard = ({ cardList }) => {
  return (
    <div
      className="res-card"
      style={{
        background: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src="https://img.freepik.com/free-photo/chicken-skewers-with-onions-top-salad_1220-567.jpg?semt=ais_hybrid"
      ></img>
      <h3>{cardList.name}</h3>
      <h4>{cardList.order}</h4>
    </div>
  );
};

export default RestaurantCard;
