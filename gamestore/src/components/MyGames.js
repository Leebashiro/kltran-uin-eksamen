import { Link } from 'react-router-dom';
import {useEffect, useState} from "react";
import { fetchAllGames} from "../lib/sanity/gamesService";

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
      {mygames.map(mygame => (
        <div key={mygame.API_id}>
          <h2>{mygame.game_title}</h2>
          <p>Genres: {mygame.genre.join(', ')}</p>
          <img src={mygame.game_image} alt={mygame.game_title} />

          <Link to={`/mygames/${mygame?.slug?.current}`} >Les mer</Link>
        </div>
      ))}
    </div>
  );
};

export default MyGames;