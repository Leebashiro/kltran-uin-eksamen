import GameCard from "./GameCard";

export default function MyFavourites({ favourites }) {
  console.log(favourites)
  return (
    <div>
      <h1>My Favourites</h1>
      {favourites.map((favourite, index) => (
        <GameCard
          key={index}
          name={favourite.name}
          background_image={favourite.background_image}
          slug={favourite.slug}
        />
      ))}
    </div>
  );
}