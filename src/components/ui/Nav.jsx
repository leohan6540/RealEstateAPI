const Nav = () => {
  return (
    <div className="flex max-w-4xl gap-3 mx-auto bg-white">
      <img src="./icon.svg" alt="부동산 아이콘" />
      <div className="flex flex-col gap-2">
        <h1 className="text-lg">부동산 정보 통합 서비스</h1>
        <h3 className="text-xs text-gray-500">
          주소 검색으로 부동산 공시정보를 한눈에 확인하세요
        </h3>
      </div>
    </div>
  );
};

export default Nav;
