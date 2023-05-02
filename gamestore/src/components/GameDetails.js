import ReactWordcloud from 'react-wordcloud';

export default function GameDetails({game, showName = true, showPlaytime = true, showGenres = true}) {

  const words = game?.tags?.map(tag => ({text: tag.name, value: 20}));
  /*Ga tag-posisjonen en random value*/
 
  function SimpleWordcloud() {
    return <ReactWordcloud words={words} />;
  }
  /*Syntaks og struktur fra selve WordCloud siden*/

  return (
    <div className="gameDetails">
      {showName && <h2>{game?.name}</h2>}
      <p>{game?.description}</p>
      <p>Release Date: {game?.released}</p>
      <p>Publisher: {game?.publishers?.map((publisher) => publisher.name).join(", ")}</p>
      <p>Developers: {game?.developers?.map((developer) => developer.name).join(", ")}</p>
      {showPlaytime && <p>Playtime: {game?.playtime}</p>}
      {showGenres && <p>Genres: {game?.genres?.map((genre) => genre.name).join(", ")}</p>}
      {/*Gjør om showName, showPlaytime og showGenres om til sine egne props*/}
      <p>Platforms: {game?.platforms?.map((platform) => platform.platform.name).join(", ")}</p>
     
      <p>Rating: {game?.rating}/5 ({game?.ratings_count} ratings)</p>
      <p>Metacritic Score: {game?.metacritic}</p>
      
      {game?.shop && (
      <p id="gameStores">
        Available for purchase:{" "}
        {game.shop.map((store) => (
          <a key={store.id} href={`https://${store.domain}/games/${game.slug}`} target="_blank" rel="noreferrer noopener">
            {store.name}
          </a>
          ))}
        </p>
      )}
       
     
    </div>
    
  );
}