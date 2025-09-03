import SearchSection from "./components/searchSection/SearchSection";
import "./App.css";
import Nav from "./components/UI/Nav";
import BeforeResult from "./components/searchResultItem/BeforeResult";
import AptList from "./components/searchResultItem/AptList";
import Pagination from "./components/searchResultItem/Pagination";
import { getApartmentInfo } from "./services/getApartmentInfo";
import useService from "./hooks/useService";
import usePagination from "./hooks/usePagination";
import { useEffect } from "react";

function App() {
  const pagination = usePagination();
  const { data: aptData } = useService(
    getApartmentInfo,
    pagination.currentPage
  );

  useEffect(() => {
    if (aptData?.body?.totalCount) {
      pagination.setTotalCount(aptData.body.totalCount);
    }
  }, [aptData]);

  return (
    <>
      <Nav />
      <div className="App">
        <SearchSection />
        <AptList aptData={aptData} />
        <Pagination
          pageNumbers={pagination.pageNumbers}
          setCurrentPage={pagination.setCurrentPage}
          totalPages={pagination.totalPages}
        />{" "}
        {/* <BeforeResult /> */}
      </div>
    </>
  );
}

export default App;
