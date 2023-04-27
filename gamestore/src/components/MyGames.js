import { useEffect, useState } from "react";
import { fetchAllGames } from "../lib/sanity/gamesService";
import GameCard from "./GameCard";

const MyGames = ({ limit }) => {
  const [mygames, setMyGames] = useState([]);
  
  useEffect(() => {
    async function getGames() {
      const data = await fetchAllGames()
      setMyGames(data);
      console.log(data);
    }
    getGames();
  }, []);
  
  return (
    <>
      <h2 id="GamesDashTitle">My Games</h2>
      <section className="gamesDashBoard">
        {mygames.slice(0, limit).map(game => (
            <GameCard
              key={game.API_id}
              name={game.game_title}
              background_image={game.background_image}
              slug={game.slug.current}
              genre={game.genre}
            />
        ))}
        
      </section>
    </>
  );
}
export default MyGames;