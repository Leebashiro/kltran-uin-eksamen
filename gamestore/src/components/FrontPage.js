import React from "react";
import GameCard from "./GameCard";
import { Link } from "react-router-dom";

export default function FrontPage({ games, fetchLatestGames }) {
  const dashGames = games.slice(0, 3);

  return (
    <>
      <h2 id="shopDashBoardTitle">GameShop</h2>
      <section className="shopDashBoard">
        {dashGames.map((game) => (
          <GameCard
            key={game.id}
            name={game.name}
            background_image={game.background_image}
            gameId={game.id}
          />
        ))}
        <Link to="/gameshop" onClick={fetchLatestGames}>
          Visit Shop
        </Link>
      </section>
    </>
  );
}