import SearchSection from "./components/searchSection/SearchSection";
import "./App.css";
import Nav from "./components/UI/Nav";
import BeforeResult from "./components/searchResultItem/BeforeResult";

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <SearchSection />
        <BeforeResult />
      </div>
    </>
  );
}

export default App;
