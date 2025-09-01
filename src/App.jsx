import SearchSection from "./components/searchSection/SearchSection";
import "./App.css";
import Nav from "./components/UI/Nav";
import BeforeResult from "./components/searchResultItem/BeforeResult";
import AptList from "./components/searchResultItem/AptList";

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <SearchSection />
        <AptList />
        {/* <BeforeResult /> */}
      </div>
    </>
  );
}

export default App;
