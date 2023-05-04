import GameCard from '../GameCard';

export default function MyFavDash({ favourites }) {
  const numberOfFavourites = favourites.length;

  return (
    <>
      <h2 id="MyFavTitle">My Favourites ({numberOfFavourites})</h2>
      <aside id="FavCardDash">
        {favourites ? (
          <>
            {favourites.map((favourite, index) => (
              <GameCard
                key={index}
                name={favourite.name}
                background_image={favourite.background_image}
                slug={favourite.slug}
              />
            ))}
          </>
        ) : (
          <p>No favourites yet.</p>
        )}
      </aside>
    </>
  );
}