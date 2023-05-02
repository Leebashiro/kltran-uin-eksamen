import GameCard from "./GameCard";

export default function MyFavourites({ favourites }) {
  console.log(favourites)
  return (
    <>
      <h1 id="MyFavTitle">My Favourites</h1>
      <section className="GamesCardDash">
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