import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function GameCard({ name, background_image, gameId, slug }) {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      const response = await fetch(
        `https://api.rawg.io/api/games/${gameId}/stores?key=6971e514cb3f4acaaac0d86b97575afb`
      );
      const data = await response.json();
      setStores(data.results);
    };
    fetchStores();
  }, [gameId]);

  return (
    <article className="gameCard">
      <Link to={`/games/${slug}`}>
        <img src={background_image} alt={`${name} background`} />
        <h3>{name}</h3>
      </Link>
      <div className="gameCard_stores">
        {stores.map((store) => (
          <a
            key={store.id}
            href={store.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Buy on {store.name}</button>
          </a>
        ))}
      </div>
    </article>
  );
}