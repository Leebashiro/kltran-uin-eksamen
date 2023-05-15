import { client } from './client';

export const fetchAllGames = async () => {
  const data = await client.fetch(`*[_type == "mygames"] {
    API_id,
    game_title,
    mygenre,
    "gameImage": game_image.asset->url,
    slug
  }`);
  return data;
};

export const fetchGame = async (slug) => {
  const data = await client.fetch(`
    *[_type == "mygames" && slug.current == $slug] {
      API_id,
      game_title,
      mygenre,
      hours_played,
      "gameImage": game_image.asset->url
    }`, {slug});
  return data;
};

export const fetchCount = async () => {
  const data = await client.fetch(`count(*[_type == "mygames"])`);
  return data;
};