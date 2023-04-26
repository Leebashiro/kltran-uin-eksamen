import React from "react";
import ShopDash from "./ShopDash";
import MyFavDash from "./MyFavDash";
import MyGamesDash from "./MyGamesDash";

export default function FrontPage({ games, fetchLatestGames, favourites}) {
  return (
    <div className="front-display">
      <ShopDash games={games} fetchLatestGames={fetchLatestGames} />
      <MyGamesDash/>
      <MyFavDash favourites={favourites} />
    </div>
  );
}