import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="dashboard">
      <Link to="/">
        <h1>GameStop</h1>
      </Link>
      
      <FontAwesomeIcon icon={faBars} className="nav-button" onClick={handleMenuClick}  />
      {isOpen && (
        <div className="menu-container">
          <ul className="menu-list" >
            <li>
              <Link to="/frontpage" onClick={handleMenuClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/gameshop" onClick={handleMenuClick}>
                GameShop
              </Link>
            </li>
            <li>
              <Link to="/mygames" onClick={handleMenuClick}>
                MyGames
              </Link>
            </li>
            <li>
              <Link to="/myfavourites" onClick={handleMenuClick}>
                Favourites
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}