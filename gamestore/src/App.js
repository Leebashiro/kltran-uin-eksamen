import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import './css/main.css'
import { Navigate, Route, Routes } from "react-router-dom";
import GameShop from "./components/GameShop";
import FrontPage from "./components/DashBoard/FrontPage";
import GamePage from "./components/GamePage";
import MyGames from "./components/MyGames";
import MyFavourites from "./components/MyFavourites";
import Login from "./components/Login/Login";

function App() {
  const [games, setGames] = useState([]);

  const fetchGameData = async () => {
    const gameIds = [374507, 856206, 10533, 11260, 2598, 1198, 2299, 197, 14, 702, 427930, 654, 10142, 46889, 374507, 10533, 422, 4032, 263590, 830059];

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
      shop: gamesDetails[index].stores
      ? gamesDetails[index].stores.map((store) => ({
          id: store.id,
          name: store.store.name,
          domain: store.store.domain,
        }))
      : [],
      publishers: gamesDetails[index].publishers,
      developers: gamesDetails[index].developers,
    /*Fikk fra stackoverflow, hvordan man merger to arrays, 
    https://stackoverflow.com/questions/55607431/how-to-merge-two-array-of-objects-with-reactjs*/
    }));

    setGames(gamesDataWithDetails);
    console.log(gamesDataWithDetails);
  };

  useEffect(() => {
    fetchGameData();
  }, []);

  /*Favouritefunksjonalitet*/

  const [favourites, setFavourites] = useState([]);
  
  function addToFavourites(game) {
  if (favourites.some(favGame => favGame.id === game.id)) {
    setFavourites(prev => prev.filter(favGame => favGame.id !== game.id));
  } else {
    setFavourites(prev => [...prev, game]);
  }
}
  
  const [email, setEmail] = useState('')
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  /*I mitt hue syntes jeg at det blir enklere å bruke en funksjon i onClick for å registrere at brukeren er på*/
  };

  return (
    <Routes>
      <Route element={<Layout games={games} setFavourites={setFavourites}/>}>
      <Route index element={isLoggedIn ? (
        <Navigate to="/frontpage" />
        ) : (
            <Login
            handleLogin={handleLogin}
            email={email}
            setEmail={setEmail}
            setUser={setUser}
            user={user}
            />
          )
        }
      />
      <Route path="/frontpage" element={<FrontPage games={games} favourites={favourites} />} />
      <Route path="/gameshop" element={<GameShop games={games} />} />
      <Route path="/games/:slug" element={<GamePage games={games} addToFavourites={addToFavourites} />} />
      <Route path="/mygames" element={<MyGames />} />
      <Route path="/mygames/:slug" element={<GamePage/>} />
      <Route path="/myfavourites" element={<MyFavourites favourites={favourites} />} />
      </Route>
    </Routes>
  );
}

export default App;