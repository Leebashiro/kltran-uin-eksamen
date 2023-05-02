import GameCard from "../GameCard";
import { Link } from "react-router-dom";

export default function ShopDash ({ games, fetchLatestGames }) {
  
  const dashGames = games.slice(0, 3);
  
  return (
    <>
      <h2 id="shopDashBoardTitle">GameShop</h2>
      <div className="shop-link-container">
      <Link to="/gameshop" onClick={fetchLatestGames} className="shop-link">
        Visit Shop
      </Link>
      </div>

      <section className="GamesCardDash" id="shopDashBoard">
      {dashGames.map((game) => (
        <GameCard
          key={game.id}
          name={game.name}
          background_image={game.background_image}
          gameId={game.id}
          slug={game.slug}
          genres={game.genres}
          numGenres={1}
          game={game}
          isMyGames={false}
        />
      ))}
</section>
    </>
);
}