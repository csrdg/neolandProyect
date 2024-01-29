import {
  getInfoPokeMatch,
  setFirstPick,
  setIsPaused,
  setMatches,
} from "../../global/data/pokeMatchGlobal";
import { loadPokemon } from "../../utils";
import "./MatchBoard.css";

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

export const resetGame = async () => {
  document.getElementById("containerBoardGame").innerHTML = "";
  getInfoPokeMatch.IsPaused = true;
  getInfoPokeMatch.FirstPick = null;
  getInfoPokeMatch.setMatches = 0;
  setTimeout(async () => {
    const loadedPokemon = await loadPokemon();
    displayPokemon([...loadedPokemon, ...loadedPokemon]);
    getInfoPokeMatch.IsPaused = false;
  }, 200);
};

export const displayPokemon = (pokemon) => {
  pokemon.sort((_) => Math.random() - 0.5);
  const pokemonHTML = pokemon
    .map((pokemon) => {
      const type = pokemon.types[0]?.type?.name;
      const color = colors[type] || "#F5F5F5";
      return `
          <div class="card" onclick="clickCard(event)" data-pokename="${pokemon.name}" style="background-color:${color};">
            <div class="front ">
            </div>
            <div class="back rotated" style="background-color:${color};">
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"  />
            <h2>${pokemon.name}</h2>
            </div>
        </div>
    `;
    })
    .join("");
  document.getElementById("containerBoardGame").innerHTML = pokemonHTML;
};
