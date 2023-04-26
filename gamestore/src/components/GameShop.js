import GameCard from "./GameCard";

export default function GameShop({ games }) {
  const shuffledGames = games.sort(() => 0.5 - Math.random());
  const shopGames = shuffledGames.slice(0, 10);
  return (
    <>
      <h2 id="shopDashBoardTitle">GameShop</h2>
      <section className="shopDashBoard">
        {shopGames.map((game) => (
          <GameCard
            key={game.id}
            background_image={game.background_image}
            slug={game.slug}
          />
        ))}
      </section>
    </>
  );
}