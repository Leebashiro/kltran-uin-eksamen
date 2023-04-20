import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";

export default function GameShop() {
  const [games, setGames] = useState([]);

  const fetchLatestGames = async () => {
    const response = await fetch(
      "https://api.rawg.io/api/games?key=6971e514cb3f4acaaac0d86b97575afb&dates=2019-09-01,2019-09-30&ordering=-released&page_size=10"
    );
    const data = await response.json();
    setGames(data.results);
  };

  useEffect(() => {
    fetchLatestGames();
  }, []);

  return (
    <>
      <h2 id="shopDashBoardTitle">GameShop</h2>
      <section className="shopDashBoard">
        {games.map((game) => (
          <GameCard
            key={game.id}
            name={game.name}
            background_image={game.background_image}
            gameId={game.id}
            stores={game.stores}
          />
        ))}
      </section>
    </>
  );
}