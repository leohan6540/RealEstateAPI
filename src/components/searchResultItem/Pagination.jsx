const Pagination = ({ pageNumbers, setCurrentPage, totalPages }) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => {
          setCurrentPage((p) => Math.max(p - 1, 1));
        }}
      >
        &lt;
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          //className={``}
          key={pageNumber}
          onClick={() => {
            setCurrentPage(pageNumber);
          }}
        >
          {pageNumber}
        </button>
      ))}
      <button
        onClick={() => {
          setCurrentPage((p) => Math.min(p + 1, totalPages));
        }}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
