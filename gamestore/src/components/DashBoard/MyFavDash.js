export default function MyFavDash({ favourites }) {

  const numberOfFavourites = favourites.length;

    return (
    <>
      <h2>My Favourites ({numberOfFavourites})</h2>

      {favourites ? (
        <div>
          {favourites.map((favourite, index) => (
            <div key={index}>
              <img src={favourite.background_image} alt={`${favourite.name} background`} />
              <p>{favourite.name}</p>
            </div>
          ))}
        </div>
      ) : (
      <p>No favourites yet.</p>
     )}
    </>
  );
}
  
