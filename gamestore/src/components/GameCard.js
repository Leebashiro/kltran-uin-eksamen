import { Link } from "react-router-dom";

export default function GameCard({ name, background_image, slug, }) {

   return (
    <article className="gameCard">
      <Link to={`/games/${slug}`}>
        <img src={background_image} alt={`${name} background`} />
        <h3>{name}</h3>
      </Link>
      <div className="gameCard_stores">
        <Link to={`/games/${slug}`}>
          <button>Buy</button>
        </Link>
      
      </div>
    </article>
  );
}