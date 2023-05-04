import { useState } from 'react';
import { useEffect } from 'react';
import ReactWordcloud from 'react-wordcloud';

export default function GameDetails({game, showName = true, showPlaytime = true, showGenres = true}) {

  function WordCloud() {
    const options = {
      rotations: 2,
      rotationAngles: [0],
    };
  
    const sortedTags = game?.tags?.sort((a, b) => b.count - a.count);
    const topTags = sortedTags?.slice(0, 20);
    const words = topTags?.map(tag => ({ text: tag.name, value: 20 }));
  
    const [size, setSize] = useState([900, 400]);
  
    useEffect(() => {
      function handleResize() {
        if (window.innerWidth >= 1200) {
          setSize([600, 300]);
        } else if (window.innerWidth >= 768) {
          setSize([400, 300]);
        } else {
          setSize([250, 200]);
        }
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => {
      window.removeEventListener('resize', handleResize);
      };
    }, []);

    /*Slet mye med å gjøre WordCloud responsiv via css, så søkte rundt og fant denne 
    https://itnext.io/3-ways-to-implement-responsive-design-in-your-react-app-bcb6ee7eb424. Benyttet meg av metoden ''Tracking the windows
    size'', som bruker state og useEffect for å endre WordCloud når skjermstørrelsen endrer seg.*/
  
    return <ReactWordcloud words={words} options={options} size={size} />;
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
        {/*Gjør om showName, showPlaytime og showGenres om til sine egne props slik at jeg kan sende dem ned for å rendre dem basert på
        props istedenfor*/}
        <p>Platforms: {game?.platforms?.map((platform) => platform.platform.name).join(", ")}</p>
        <p>Rating: {game?.rating}/5 ({game?.ratings_count} ratings)</p>
        <p>Metacritic Score: {game?.metacritic}</p>
        
        <div id="Cloud">{game?.tags && <WordCloud/>}</div>

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