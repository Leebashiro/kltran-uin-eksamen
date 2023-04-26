export default function GameDetails({game, addToFavourites,  showName = true, showPlaytime = true, showGenres = true }) {
  return (
    <div className="gameDetails">
      {showName && <h2>{game?.name}</h2>}
      <p>{game?.description}</p>
      {showPlaytime && <p>Playtime: {game?.playtime}</p>}
      {showGenres && <p>Genres: {game?.genres?.map((genre) => genre.name).join(", ")}</p>}
      {/*Gjør om showName, showPlaytime og showGenres om til sine egne props */}
      <p>Platforms: {game?.platforms?.map((platform) => platform.platform.name).join(", ")}</p>
      <p>Release Date: {game?.released}</p>
      <p>Rating: {game?.rating}/5 ({game?.ratings_count} ratings)</p>
      <p>Metacritic Score: {game?.metacritic}</p>
      <p>Publisher: {game?.publishers?.map((publisher) => publisher.name).join(", ")}</p>
      <p>Developers: {game?.developers?.map((developer) => developer.name).join(", ")}</p>
      <p>Tags: {game?.tags?.map((tag) => tag.name).join(", ")}</p>
      
      {game?.shop && (
      <p>
        Available for purchase:{" "}
        {game.shop.map((store) => (
          <a key={store.id} href={`https://${store.domain}/games/${game.slug}`} target="_blank" rel="noreferrer noopener">
            {store.name}
          </a>
          ))}
        </p>
      )}

      <button onClick={() => addToFavourites(game, game.background_image, game.name, game.genres?.map((genre) => genre.name).join(", "))}>Favourite</button>
    </div>
  );
}