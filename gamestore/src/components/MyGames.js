import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { fetchAllGames } from "../lib/sanity/gamesService";
import GameCard from "./GameCard";

const MyGames = () => {
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
      {mygames.map(mygames => (
        <div key={mygames.API_id}>
          <GameCard
            name={mygames.game_title}
            background_image={mygames.game_image}
            slug={mygames.slug.current}
            genre={mygames.genre}
          />
          <p>Genres: {mygames.genre.join(', ')}</p>
          <Link to={`/mygames/${mygames.slug.current}`}>Les mer</Link>
          {console.log(mygames.slug.current)}
        </div>
      ))}
    </div>
  );
};

export default MyGames;