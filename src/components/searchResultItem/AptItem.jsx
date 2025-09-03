const AptItem = ({ name, address1, address2, address3, number }) => {
  return (
    <div className="flex border-t">
      <div className="flex justify-center w-16 p-2 border-r">{number++}</div>
      <div className="w-56 p-2 border-r">{name}</div>
      <div className="p-2">
        {address1} {address2} {address3}
      </div>
    </div>
  );
};

export default AptItem;
