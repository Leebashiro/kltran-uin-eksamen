import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
      <div className="dashboard">
        <h1>GameStop</h1>
  
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
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </div>
    );
  }