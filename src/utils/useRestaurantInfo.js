import { MENU_URL } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantInfo = ({resName}) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resName);
    const json = await data.json();

    setResInfo(json);
  };
  return resInfo;
};

export default useRestaurantInfo;
