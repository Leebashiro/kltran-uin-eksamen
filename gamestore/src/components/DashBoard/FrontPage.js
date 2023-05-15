import React from "react";
import ShopDash from "./ShopDash";
import MyFavDash from "./MyFavDash";
import MyGamesDash from "./MyGamesDash";
import Pink from "../../images/pink.jpg";


export default function FrontPage({ games, fetchLatestGames, favourites}) {
  return (
    <> 
        <img className="background-img" src={Pink} alt="Pink"/>
       
        <main className="FrontDisplay">
        <div id="ShopFront"><ShopDash games={games} fetchLatestGames={fetchLatestGames} /></div>
        <div id="GamesFront"><MyGamesDash/></div>
        <div id="Line"></div>
        <div id="FavFront"><MyFavDash favourites={favourites}/></div>
      </main>
    </>
  );
}