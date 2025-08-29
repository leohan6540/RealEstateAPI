import Button from "../common/Button.jsx";
import { inputSize, inputStyle } from "./SearchbarToken.js";

const SearchBar = ({
  placeholder,
  searchbarSize = "searchbar500",
  searchbarStyle = "searchbar500",
  className,
  //value,
  btnChildren,
  ...props
}) => {
  const sizeClass = inputSize[searchbarSize] || "";
  const styleClass = inputStyle[searchbarStyle] || "";

  return (
    <div>
      <img
        className="relative w-4 top-[34px] left-2"
        src="./searchIcon.svg"
        alt="검색 아이콘"
      />
      <input
        placeholder={placeholder}
        className={`${className} ${sizeClass} ${styleClass}`}
        {...props}
      />
      <Button className="relative right-16">{btnChildren}</Button>
    </div>
  );
};

export default SearchBar;
