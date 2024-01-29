const pokeAPIBaseUrl = "https://pokeapi.co/api/v2/pokemon/";

export const loadPokemon = async () => {
  const randomIds = new Set();
  while (randomIds.size < 8) {
    const randomNumber = Math.ceil(Math.random() * 151);
    randomIds.add(randomNumber);
  }
  const pokePromises = [...randomIds].map((id) => fetch(pokeAPIBaseUrl + id));
  const results = await Promise.all(pokePromises);
  return await Promise.all(results.map((res) => res.json()));
};
