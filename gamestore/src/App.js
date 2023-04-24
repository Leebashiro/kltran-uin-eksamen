import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import './css/main.css'
import { Route, Routes } from "react-router-dom";
import GameShop from "./components/GameShop";
import FrontPage from "./components/DashBoard/FrontPage";
import GamePage from "./components/GamePage";
import MyFavourites from "./components/MyFavourites";

function App() {
  const [games, setGames] = useState([]);


  const fetchGameData = async () => {
    const gameIds = [374507, 856206, 10533, 11260, 2598, 1198, 2299, 197, 14, 702];

    const gamesResponse = await fetch(
      `https://api.rawg.io/api/games?ids=${gameIds.join()}&key=6971e514cb3f4acaaac0d86b97575afb`
    );
    const gamesData = await gamesResponse.json();

    const gamesDetails = await Promise.all(
      gamesData.results.map(async (game) => {
        const detailsResponse = await fetch(
          `https://api.rawg.io/api/games/${game.id}?key=6971e514cb3f4acaaac0d86b97575afb`
        );
        const detailsData = await detailsResponse.json();
        return detailsData;
      })
    );
    /*Har brukt promise.all her som jeg gjorde tidligere i arbeidskrav 4 om moviesearch*/
    const gamesDataWithDetails = gamesData.results.map((game, index) => ({
      ...game,
      description: gamesDetails[index].description_raw,
      shop: gamesDetails[index].stores,
    /*Fikk fra stackoverflow, hvordan man merger to arrays, 
    https://stackoverflow.com/questions/55607431/how-to-merge-two-array-of-objects-with-reactjs*/
    }));

    setGames(gamesDataWithDetails);
  };

  
  /*Favouritefunksjonalitet*/

  const [favourites, setFavourites] = useState([]);

  function addToFavourites(game) {
  if (favourites.some(favGame => favGame.id === game.id)) {
    setFavourites(prev => prev.filter(favGame => favGame.id !== game.id));
    console.log(game.name + " Removed from Favourites");
  } else {
    setFavourites(prev => [...prev, game]);
    console.log(game.name  + " Added to Favourites");
  }
}
  console.log(favourites)
  

  useEffect(() => {
    fetchGameData();
  }, []);

  return (
    <Routes>
      <Route element={<Layout games={games} setFavourites={setFavourites}/>}>
        <Route index element={<FrontPage games={games} favourites={favourites}/>} />
        <Route path="/gameshop" element={<GameShop games={games} />} />
        <Route path="/games/:slug" element={<GamePage games={games} addToFavourites={addToFavourites}  />} />
        <Route path="/myfavourites" element={<MyFavourites favourites={favourites} />} />
      </Route>
    </Routes>
  );
}

export default App;