import { client } from './client';

export const fetchUserByEmail = async (email) => {
    const query = `*[_type == "user" && epost == "${email}"][0]`;
    const userData = await client.fetch(query);
    return userData;
  };