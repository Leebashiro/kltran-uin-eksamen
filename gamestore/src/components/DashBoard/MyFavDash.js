import GameCard from '../GameCard';

export default function MyFavDash({ favourites }) {
  const numberOfFavourites = favourites.length;

  return (
    <>
      <h2>My Favourites ({numberOfFavourites})</h2>

      {favourites ? (
        <div>
          {favourites.map((favourite, index) => (
            <div key={index}>
              <GameCard
                name={favourite.name}
                background_image={favourite.background_image}
                slug={favourite.slug}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No favourites yet.</p>
      )}
    </>
  );
}