import GameCard from "../GameCard";
import { Link } from "react-router-dom";

export default function ShopDash ({ games, fetchLatestGames }) {
        const dashGames = games.slice(0, 3);
        console.log(games);
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
                  slug={game.slug}
                  genres={game.genres}
                />
              ))}
              <Link to="/gameshop" onClick={fetchLatestGames}>
                Visit Shop
              </Link>
            
            </section>
          </>
    );
}