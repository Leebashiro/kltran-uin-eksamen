import { useParams } from "react-router-dom";
import GameDetails from "./GameDetails";

export default function GamePage({ games, addToFavourites }) {
  const { slug } = useParams();
  const game = games.find((game) => game.slug === slug);

  return (
    <>
      <GameDetails game={game} addToFavourites={addToFavourites}/>
    </>
  );
}