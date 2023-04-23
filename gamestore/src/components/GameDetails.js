export default function GameDetails({ game }) {
  return (
    <div className="gameDetails">
      {game && <img src={game.background_image} alt={`${game.name} background`} />}
      <h2>{game && game.name}</h2>
      <p>{game && game.description}</p>
      <p>Playtime: {game && game.playtime}</p>
      <p>Genres: {game && game.genres.map((genre) => genre.name).join(", ")}</p>
      <p>Platforms: {game && game.platforms.map((platform) => platform.platform.name).join(", ")}</p>
      <p>Release Date: {game && game.released}</p>
      <p>Rating: {game && game.rating}/5 ({game && game.ratings_count} ratings)</p>
      <p>Metacritic Score: {game && game.metacritic}</p>
      <p>Stores: {game && game.shop.map((store) => store.store.name).join(", ")}</p>
    </div>
  );
}