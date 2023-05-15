import { Link } from "react-router-dom";
import GameCard from "./GameCard";

export default function MyFavourites({ favourites }) {
  return (
    <>
      <h2 id="MyFavTitle">
        <Link to="/myfavourites">My Favourites</Link>
      </h2>

      <section id="MyFavourites">
      {favourites.map((favourite, index) => (
        <GameCard
          key={index}
          name={favourite.name}
          background_image={favourite.background_image}
          slug={favourite.slug}
        />
      ))}
    </section>
    </>
  );
}