import { Link } from "react-router-dom";

export default function GameCard({ name, background_image, slug, genres }) {
  return (
    <article className="gameCard">
      <Link to={`/games/${slug}`}>
        {background_image && <img src={background_image} alt={`${name} background`} />}
        <h3>{name}</h3>
        <p>{genres?.map((mygenre) => mygenre.name).join(", ")}</p>
       
      </Link>
    </article>
  );
}