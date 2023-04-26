import GameCard from "./GameCard";

export default function GameShop({ games }) {
  const shuffledGames = games.sort(() => 0.5 - Math.random());
  /*Syntes det kunne være kult med at spillene shufflet på dashboard/gameshop. 
  Her er kilde til algoritme og kode, eksperimenterte litt med numrene. 
  https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array*/
  
  const shopGames = shuffledGames.slice(0, 10);
  return (
    <>
      <h2 id="shopDashBoardTitle">GameShop</h2>
      <section className="shopDashBoard">
        {shopGames.map((game) => (
          <GameCard
            key={game.id}
            name={game.name}
            background_image={game.background_image}
            slug={game.slug}
            genres={game.genres} 
          />
          
        ))}
      </section>
    </>
  );
}