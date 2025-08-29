import SearchBar from "./SearchBar";
import Button from "../common/Button";

const SearchSection = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-4xl gap-2 mx-auto bg-white border rounded-xl">
      <h2 className="text-xl">부동산 정보 검색</h2>
      <h3 className="text-sm">검색하고 싶은 부동산의 주소를 입력해주세요.</h3>
      <div className="flex flex-col gap-2">
        <SearchBar
          className="rounded-lg"
          placeholder="예시: 서울특별시"
          btnChildren="검색"
        />
        <p className="text-xs text-gray-500">최근 검색된 지역</p>
        <div>
          <Button btnSize="btn52gray" btnStyle="grayBg">
            강남구
          </Button>
        </div>
      </div>
      <p className="text-xs text-gray-500">
        예시: 서울특별시 강남구 테헤란로 123, 부산광역시 해운대구 센텀중앙로 79
      </p>
    </div>
  );
};

export default SearchSection;
