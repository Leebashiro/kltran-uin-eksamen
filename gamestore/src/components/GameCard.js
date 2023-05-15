import { Link } from "react-router-dom";

export default function GameCard({ name, gameImage, background_image, slug, genres, mygenres, isMyGames }) {

  return (
    <Link to={`/games/${slug}`} className="gameCard">
      {gameImage ? <img className="gameCard_image" src={gameImage} alt={`${name} background`} /> 
      : background_image ? <img className="gameCard_image" src={background_image} alt={`${name} background`} /> : null}
      <h3 className="cardName">{name}</h3>
      
        {isMyGames ? (
          <div className="genres">
          {mygenres?.map((genre, index) => (
            <div key={index} className="genre-wrapper">
              <span className="genre">{genre}</span>
          </div>
          ))}
        </div>
        ) : (
          <div className="genres">
          {genres?.map((genre) => (
            <div key={genre.id} className="genre-wrapper">
              <span className="genre">{genre.name}</span>
          </div>
      /*Har brukt en boolean for å rendre forskjellige GameCards, avhengig om data stammer fra Sanity eller API*/
      ))}
    </div>
      )}
    </Link>
  );
}