import React from "react";

const BeforeResult = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-4xl gap-2 mx-auto bg-white border rounded-xl">
      <img src="./searchIcon.svg" alt="검색아이콘" height="56px" width="56px" />
      <h2>부동산 정보를 검색해보세요</h2>
      <p className="text-sm">
        궁금한 부동산의 주소를 입력하면 건축물대장, 토지대장, 공시지가 등의
        정보를 확인할 수 있습니다.
      </p>
    </div>
  );
};

export default BeforeResult;
