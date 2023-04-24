import {client} from './client'

export const fetchAllGames = async () => {
  const data = await client.fetch(`*[_type == "game"]`);
  return data;
};

export const fetchGame = async (slug) => {
  const data = await client.fetch(`
    *[_type == "game" && slug.current == $slug] {
      game_title,
      genre,
      hours_played,
      "game_image": game_image.asset->url
    }`, { slug });
  return data;
};