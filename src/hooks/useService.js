import { useEffect } from "react";
import { useState } from "react";

const useService = (axiosApt, params) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAptData = async () => {
      try {
        const aptData = await axiosApt(params);
        setData(aptData.body.items);
      } catch (error) {
        console.error(error);
      }
    };
    getAptData();
  }, []);

  return { data };
};

export default useService;
