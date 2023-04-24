import React from "react";
import ShopDash from "./ShopDash";
import MyFavDash from "./MyFavDash";

export default function FrontPage({ games, fetchLatestGames, favourites }) {
  return (
    <>
      <ShopDash games={games} fetchLatestGames={fetchLatestGames} />
      <MyFavDash favourites={favourites} />
    </>
  );
}