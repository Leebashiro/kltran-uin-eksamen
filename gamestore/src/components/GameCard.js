import { Link } from "react-router-dom";

export default function GameCard({ name, background_image, slug, genres, genre}) {
  return (
    <Link to={`/games/${slug}`} className="gameCard">
      <img className="gameCard_image" src={background_image} alt={`${name} background`} />
      <h3>{name}</h3>
      <p>{genres?.map((genre) => genre.name).join(", ")}</p>
      <p>{genre?.join(', ')}</p>
    </Link>
  );
}