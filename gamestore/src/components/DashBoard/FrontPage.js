import React from "react";
import ShopDash from "./ShopDash";
import MyFavDash from "./MyFavDash";
import MyGamesDash from "./MyGamesDash";


export default function FrontPage({ games, fetchLatestGames, favourites}) {
  return (
    <> 
      <div className="FrontDisplay">
        <div id="ShopFront"><ShopDash games={games} fetchLatestGames={fetchLatestGames} /></div>
        <div id="GamesFront"><MyGamesDash/></div>
        <div id="Line"></div>
        <div id="FavFront"><MyFavDash favourites={favourites}/></div>
      </div>
    </>
  );
}