import "./App.css"
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";


function App() {

  return (

      <div className="app">
        <Header />
        <Routes>

        <Route path="/" element={<Homepage />}  />
        <Route path="/coins/:id" element={<CoinPage />}  />
        </Routes>

      </div>

  );
}

export default App;
