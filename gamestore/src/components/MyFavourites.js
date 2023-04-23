export default function MyFavourites({ favourites }) {
  console.log(favourites)
  return (
    <div>
      <h1>My Favourites</h1>
      {favourites.map((favourite, index) => (
        <div key={index}>
          <img src={favourite.background_image} alt={`${favourite.name} background`} />
          <p>{favourite.name}</p>
          <p>Genres: {favourite.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      ))}
    </div>
  );
}