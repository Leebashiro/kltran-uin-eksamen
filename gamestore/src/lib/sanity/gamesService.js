import { client } from './client';

export const fetchAllGames = async () => {
  const data = await client.fetch(`*[_type == "mygames"] {
    API_id,
    game_title,
    genre,
    "game_image": game_image.asset->url,
    slug
  }`);
  console.log(data); 
  return data;
};

export const fetchGame = async (slug) => {
  const data = await client.fetch(`
    *[_type == "mygames" && slug.current == $slug] {
      API_id,
      game_title,
      genre,
      hours_played,
      "game_image": game_image.asset->url
    }`, {slug});
  return data;
};