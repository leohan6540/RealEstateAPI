import { inputSize, inputStyle } from "./SearchbarToken.js";

const SearchBar = ({
  placeholder,
  searchbarSize = "searchbar500",
  searchbarStyle = "searchbar500",
  className,
  //value,
  ...props
}) => {
  const sizeClass = inputSize[searchbarSize] || "";
  const styleClass = inputStyle[searchbarStyle] || "";

  return (
    <div>
      <img
        className="relative top-8"
        src="./searchIcon.svg"
        alt="검색 아이콘"
      />
      <input
        placeholder={placeholder}
        className={`${className} ${sizeClass} ${styleClass}`}
        {...props}
      />
    </div>
  );
};

export default SearchBar;
