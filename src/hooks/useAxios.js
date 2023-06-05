import { useState } from "react";
import axios from "axios";
import uuid from "uuid";

const useAxios = (url) => {
  const [data, setData] = useState([]);

  const addData = async (endPoint = "") => {
    if (typeof endPoint === "string") url += `${endPoint}/`;
    const response = await axios.get(url);
    setData((d) => [...d, { ...response.data, id: uuid() }]);
  };

  return [data, addData];
};

export default useAxios;
