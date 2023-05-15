import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  /*Kode for responsiv Nav på react: https://blog.logrocket.com/create-responsive-navbar-react-css/*/
      return (
        <nav className="dashboard">
          <Link to="/">
            <h1>Khameleon</h1>
          </Link>
              
                  <FontAwesomeIcon
                    icon={faBars}
                    className="nav-button"
                    onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                    }}
              />
         <div
        className={
          isNavExpanded ? "nav-menu expanded" : "nav-menu"
        }
      > 
       <ul>
          <li>
            <Link to="/frontpage" >
              Home
            </Link>
          </li>
          <li>
            <Link to="/gameshop" >
              GameShop
            </Link>
          </li>
          <li>
            <Link to="/mygames" >
              MyGames
            </Link>
          </li>
          <li>
            <Link to="/myfavourites" >
              Favourites
            </Link>
          </li>
        </ul>
      </div>
      </nav>
  );
}
