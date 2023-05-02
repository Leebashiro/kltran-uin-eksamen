import { Link } from "react-router-dom";

export default function GameCard({ name, gameImage, background_image, slug, genres, mygenres, isMyGames }) {

  return (
    <Link to={`/games/${slug}`} className="gameCard">
      {gameImage ? <img className="gameCard_image" src={gameImage} alt={`${name} background`} /> 
      : background_image ? <img className="gameCard_image" src={background_image} alt={`${name} background`} /> : null}
      <h3 className="cardName">{name}</h3>
      
      
      {isMyGames ? (
        <p className="genres">{mygenres?.join(', ') ?? ""}</p>
      ) : (
        <p className="genres">{genres?.map(genre => genre.name).join(", ") ?? ""}</p>
      )}

    </Link>
  );
}