import { setData } from "../global/state/globalstate";
import { getByIdPokemon } from "../services/pokemon.service";

export const loadPokemon = async () => {
  const randomIds = [];
  while (randomIds.size < 8) {
    const randomNumber = Math.ceil(Math.random() * 151);
    randomIds.push(randomNumber)(await getByIdPokemon(i));
  }
  return dataMapGame(randomIds);
};

const dataMapGame = (data) => {
  const filterData = data.map((pokemon) => ({
    name: pokemon.name,
    image: pokemon.sprites.front_default,
    type: pokemon.types,
    id: pokemon.id,
  }));
};

export const getInfoGAme = async () => {
  console.log("actualizando info... 👌🔍");
  const data = await loadPokemon();
  setData(data, "PokeMatchGame");
};

getInfoGAme();
