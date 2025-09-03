import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const SERVICE_KEY = import.meta.env.VITE_SERVICE_KEY;

export const getApartmentInfo = async ({ pageNo, numOfRows }) => {
  try {
    const query = new URLSearchParams({
      serviceKey: SERVICE_KEY,
      pageNo: pageNo,
      numOfRows: numOfRows,
    });

    const firstResponse = await axios.get(
      `${BASE_URL}/getTotalAptList3?${SERVICE_KEY}&${query}`
    );
    const data = firstResponse.data.response;
    return data;
  } catch (error) {
    throw new Error("API 데이터를 받아 오지 못했습니다.", error.message);
  }
};
