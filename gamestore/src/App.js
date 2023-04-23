import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import './css/main.css'
import { Route, Routes } from "react-router-dom";
import GameShop from "./components/GameShop";
import FrontPage from "./components/FrontPage";
import GamePage from "./components/GamePage";

function App() {
  const [games, setGames] = useState([]);

  const fetchGameData = async () => {
    const gameIds = [1234, 5678, 7891];

    const gamesResponse = await fetch(
      `https://api.rawg.io/api/games?ids=${gameIds.join()}&key=6971e514cb3f4acaaac0d86b97575afb`
    );
    const gamesData = await gamesResponse.json();

    const gamesDetails = await Promise.all(
      gamesData.results.map(async (game) => {
        const detailsResponse = await fetch(
          `https://api.rawg.io/api/games/${game.id}?key=6971e514cb3f4acaaac0d86b97575afb`
        );
        const detailsData = await detailsResponse.json();
        return detailsData;
      })
    );

    const gamesDataWithDetails = gamesData.results.map((game, index) => ({
      ...game,
      description: gamesDetails[index].description_raw,
      shop: gamesDetails[index].stores,
    }));

    setGames(gamesDataWithDetails);
  };

  useEffect(() => {
    fetchGameData();
  }, []);

  return (
    <Routes>
      <Route element={<Layout games={games} />}>
        <Route index element={<FrontPage games={games} />} />
        <Route path="/gameshop" element={<GameShop games={games} />} />
        <Route path="/games/:slug" element={<GamePage games={games} />} />
      </Route>
    </Routes>
  );
}

export default App;