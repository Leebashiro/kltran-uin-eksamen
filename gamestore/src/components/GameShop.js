import GameCard from "./GameCard";

export default function GameShop({ games }) {
  return (
    <>
      <h2 id="shopDashBoardTitle">GameShop</h2>
      <section className="shopDashBoard">
        {games.map((game) => (
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