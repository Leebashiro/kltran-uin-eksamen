export default function GameDetails({game, addToFavourites}) {

  return (
    <div className="gameDetails">
      {game?.background_image && <img src={game.background_image} alt={`${game.name} background`} />}
      <h2>{game?.name}</h2>
      <p>{game?.description}</p>
      <p>Playtime: {game?.playtime}</p>
      <p>Genres: {game?.genres?.map((genre) => genre.name).join(", ")}</p>
      <p>Platforms: {game?.platforms?.map((platform) => platform.platform.name).join(", ")}</p>
      <p>Release Date: {game?.released}</p>
      <p>Rating: {game?.rating}/5 ({game?.ratings_count} ratings)</p>
      <p>Metacritic Score: {game?.metacritic}</p>
      <p>Kjøp her: {game?.shop?.map((store) => store.store.name).join(", ")}</p>
      
      <button onClick={() => addToFavourites(game, game.background_image, game.name, game.genres?.map((genre) => genre.name).join(", "))}>Favourite</button>
    </div>
  );
}