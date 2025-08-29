import axios from "axios";

const BASE_URL = import.meta.env.BASE_URL;
const PWD = import.meta.env.PASSWORD;

export const getApartmentInfo = async ({ pageNo = 1, numOfRows }) => {
  try {
    const query = new URLSearchParams({
      serviceKey: PWD,
      pageNo: pageNo,
      numOfRows: numOfRows,
    });
    const response = await axios.get(`${BASE_URL}/getTotalAptList3?${query}`);
    return response.data;
  } catch (error) {
    throw new Error("API 데이터를 받아 오지 못했습니다.", error.message);
  }
};
