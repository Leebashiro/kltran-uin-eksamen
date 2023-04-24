import { Link } from "react-router-dom";

export default function Nav() {
    return (
      <div className="dashboard">

        <Link to="/"><h1>GameStop</h1></Link>
        
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gameshop">GameShop</Link>
          </li>
          <li>
            <Link to="/mygames">MyGames</Link>
          </li>
          <li>
            <Link to="/myfavourites">Favourites</Link>
          </li>
        </ul>
      </div>
    );
  }