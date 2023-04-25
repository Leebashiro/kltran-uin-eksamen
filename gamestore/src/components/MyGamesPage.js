import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGame } from '../lib/sanity/gamesService';
export default function MyGamesPage() {
  const {slug} = useParams();

  const [mygame, setMyGame] = useState(null);

  const getGame = async (slug) => {
    const data = await fetchGame(slug);
    setMyGame(data[0]);
  };
  
  useEffect(() => {
    getGame(slug);
  }, [slug]);
  return (
    <div>
      {mygame ? (
        <div>
          <h2>{mygame.game_title}</h2>
          <p>Genres: {mygame.genre.join(', ')}</p>
          <p>Hours played: {mygame.hours_played}</p>
          <img src={mygame.game_image} alt={mygame.game_title} />
        
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}