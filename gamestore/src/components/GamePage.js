import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGame } from '../lib/sanity/gamesService';
import GameDetails from './GameDetails';

export default function GamePage({ games, addToFavourites }) {
  const { slug } = useParams();

  const game = games.find((game) => game.slug === slug);

  const [mygames, setMyGames] = useState(null);

  const getGame = async (slug) => {
    const data = await fetchGame(slug);
    setMyGames(data[0]);
  };
  
  useEffect(() => {
    getGame(slug);
  }, [slug]);

  return (
    <>
      <div>
        {mygames ? (
          <div>
             <img src={mygames.background_image} alt={mygames.name} />
            <h2>{mygames.game_title}</h2>
            <p>Genres: {mygames.genre.join(', ')}</p>
            <p>Hours played: {mygames.hours_played}</p>
            <GameDetails game={game} addToFavourites={addToFavourites} showName={false} showPlaytime={false} showGenres={false}  />
            {/*Setter inn showName={false}- som props fordi jeg ikke ønsker å få dem fra GameDetails komponente, grunnet at jeg
            ikke vil at det skal kræsje med data som vi allerede får fra sanity.api (som jeg antar at man må bruke) */}
          </div>
        ) : (
          <div>
            {game && (
              <>
                <img src={game.background_image} alt={game.name} />
                <GameDetails game={game} addToFavourites={addToFavourites} />
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}