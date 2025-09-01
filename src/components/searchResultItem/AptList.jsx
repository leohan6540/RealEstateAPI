import AptItem from "./AptItem";
import { getApartmentInfo } from "../../services/getApartmentInfo";
// import { useState } from "react";
//import { useEffect } from "react";
import useService from "../../hooks/useService";

const AptList = () => {
  const { data: aptData } = useService(getApartmentInfo, {
    pageNo: 1,
    numOfRows: 10,
  });

  return (
    <div className="flex flex-col justify-center max-w-4xl mx-auto bg-white border rounded-xl">
      <div className="flex">
        <div className="flex justify-center w-16 p-2 border-r">번호</div>
        <div className="w-56 p-2 border-r">아파트 이름</div>
        <div className="p-2 ">아파트 주소</div>
      </div>
      {aptData.map((apt) => {
        return (
          <AptItem
            id={apt.kaptCode}
            name={apt.kaptName}
            address1={apt.as1}
            address2={apt.as2}
            address3={apt.as3}
          />
        );
      })}
    </div>
  );
};

export default AptList;
