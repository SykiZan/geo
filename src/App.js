import { Route, Routes } from "react-router-dom";
import "./App.module.scss";
import MainPage from "./components/mainPage/MainPage";
import SearchPage from "./components/searchPage/SearchPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
