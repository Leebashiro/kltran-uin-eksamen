import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGame } from '../lib/sanity/gamesService';
import GameDetails from './GameDetails';
import Pink from "../images/pink.jpg";

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
      <img className="background-img" src={Pink} alt="Pink"/>
        {mygames ? (
          <>  
            <div className="gameContainer">
              <img src={mygames.gameImage} alt={mygames.game_title} />
               <h2>{mygames.game_title}</h2>
               <button id="FavButton" onClick={() => addToFavourites(game, game.background_image, game.name, game.genres?.map((genre) => genre.name).join(", "))}>Favourite</button>
                <p className="mygenre">{mygames.mygenre.join(' | ')}</p>
                 <p>Hours played: {mygames.hours_played}</p>
                <GameDetails game={game} addToFavourites={addToFavourites} showName={false} showPlaytime={false} showGenres={false} />
              
            </div>
          </>
        ) : (
          <div>
              {game && (
              <>
              <div className="gameContainer">
                <img src={game.background_image} alt={game.name} />
                <button id="FavButton" onClick={() => addToFavourites(game, game.background_image, game.name, game.genres?.map((genre) => genre.name).join(", "))}>Favourite</button>
                 
                 <GameDetails game={game} addToFavourites={addToFavourites} />
               
              </div>
              
            </>
          )}
        </div>
      )}
  </>
);
}