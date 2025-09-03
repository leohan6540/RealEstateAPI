//import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const numOfRows = 10; //LIMIT, PAGE_SIZE

  const totalPages = Math.ceil(totalCount / numOfRows);

  const pageNumbers = useMemo(() => {
    let start = Math.max(currentPage - 4, 1);
    let end = Math.min(start + 9, totalPages);

    if (end - start < 9) {
      start = Math.max(end - 9, 1);
    }

    const pages = [];

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    //console.log("$", pages);

    return pages;
  }, [currentPage, totalCount, totalPages]);

  return {
    currentPage,
    setCurrentPage,
    totalCount,
    setTotalCount,
    pageNumbers,
    totalPages,
  };
};

export default usePagination;
