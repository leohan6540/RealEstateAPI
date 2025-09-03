import { useEffect } from "react";
import { useState } from "react";

const useService = (axiosApt, currentPage) => {
  const [data, setData] = useState([]);
  console.log(currentPage);

  useEffect(() => {
    const getAptData = async () => {
      try {
        const aptData = await axiosApt({ pageNo: currentPage, numOfRows: 10 });

        setData(aptData);
      } catch (error) {
        console.error(error);
      }
    };
    getAptData();
  }, [currentPage]);

  return { data };
};

export default useService;
