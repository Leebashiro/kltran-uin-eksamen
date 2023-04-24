import React from "react";
import ShopDash from "./ShopDash";

export default function FrontPage({ games, fetchLatestGames }) {
  return (
    <>
      <ShopDash games={games} fetchLatestGames={fetchLatestGames} />
      
    </>
  );
}