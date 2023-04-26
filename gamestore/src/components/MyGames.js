import { useEffect, useState } from "react";
import { fetchAllGames } from "../lib/sanity/gamesService";
import GameCard from "./GameCard";

const MyGames = ({ limit }) => {
  const [mygames, setMyGames] = useState([]);
  
  useEffect(() => {
    async function getGames() {
      const data = await fetchAllGames()
      setMyGames(data);
    }
    getGames();
  }, []);
  
  return (
    <div>
      {mygames.slice(0, limit).map(mygame => (
        <div key={mygame.API_id}>
          <GameCard
            name={mygame.game_title}
            background_image={mygame.game_image}
            slug={mygame.slug.current} 
          />
        </div>
      ))}
    </div>
  );
};

export default MyGames;