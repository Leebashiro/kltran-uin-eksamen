import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import './css/main.css'
import { Route, Routes } from "react-router-dom";
import GameShop from "./components/GameShop";
import FrontPage from "./components/FrontPage";

function App() {
  const [games, setGames] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`
      https://api.rawg.io/api/games?key=6971e514cb3f4acaaac0d86b97575afb&dates=2019-09-01,2019-09-30&ordering=-released&page_size=3
    `);
    const data = await response.json();
    setGames(data.results);
  };

  useEffect (() => {
    fetchData();
  }, []);

  return (
    <Routes>
      <Route element={<Layout games={games} />}>
        <Route index element={<FrontPage games={games} />} />
        <Route path="/gameshop" element={<GameShop games={games} />} />
      </Route>
    </Routes>
  );
}

export default App;