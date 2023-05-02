import { useEffect, useState } from "react";
import { fetchAllGames, fetchCount } from "../lib/sanity/gamesService";
import GameCard from "./GameCard";
import { Link } from "react-router-dom";

const MyGames = ({ limit, isDashboard }) => {
  const [mygames, setMyGames] = useState([]);
  const [mygamesCount, setMygamesCount] = useState([]);
  
  useEffect(() => {
    async function getGames() {
      const data = await fetchAllGames()
      setMyGames(data);
    }
    getGames();
  }, []);

  useEffect(() => {
    async function getCount() {
      const dataCount = await fetchCount()
      setMygamesCount(dataCount);
    }
    getCount();
  }, []);

  return (
    <>
      <h2 id="GamesDashTitle">
        <Link to="/mygames">My Games ({mygamesCount})</Link>
      </h2>
      <section className={isDashboard ? "GamesCardDash" : "MyGames"} id="gamesDashBoard">
        {mygames.slice(0, limit).map(game => (
          <GameCard
            key={game.API_id}
            name={game.game_title}
            background_image={game.gameImage}
            slug={game.slug.current}
            mygenres={game.mygenre}
            gameImage={game.gameImage}
            isMyGames={true}
            className={isDashboard ? "GameCardDash" : "MyGames"}
          />
        ))}
      </section>
    </>
  );
};

export default MyGames;