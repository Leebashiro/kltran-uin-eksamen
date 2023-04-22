export default function GameDetails({ game }) {
    return (
      <div className="gameDetails">
        <img src={game.background_image} alt={`${game.name} background`} />
        <h2>{game.name}</h2>
        <p>{game.description}</p>
        <p>Playtime: {game.playtime}</p>
        <p>Genres: {game.genres.join(", ")}</p>
      </div>
    );
  }