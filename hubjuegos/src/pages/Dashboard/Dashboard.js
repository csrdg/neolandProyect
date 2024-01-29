import { getInfo, initControler } from "../../utils";
import "./Dashboard.css";

const template = () => `
<div id="containerDashboard">
<ul>
  <li>
    <figure id="navigatePokemon">
      <img
        src="https://res.cloudinary.com/deck6wgqf/image/upload/v1706219272/Pokedex-PNG-Transparent_eiezoo.png""
        alt="go to page pokemon"
      />
      <h2>POKEMON</h2>
    </figure>
  </li>
  <li>
    <figure>
      <img
        src="https://res.cloudinary.com/deck6wgqf/image/upload/v1706219449/dxohppd3kbiwepizqbye.png"
        alt=" go to whos that pokemon game"
      />
      <h2>POKEMON GAME</h2>
    </figure>
  </li>
  <li>
    <figure id="navigatePokeMatch">
      <img
        src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761735/6168776_kfna36.png"
        alt="go to poke match"
      />
      <h2>POKE MATCH</h2>
    </figure>
  </li>
</ul>
</div>
`;

const addEventlisteners = () => {
  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });
  const navigatePokeMatch = document.getElementById("navigatePokeMatch");
  navigatePokeMatch.addEventListener("click", () => {
    initControler("PokeMatch");
  });
};

export const printTemplateDashboard = () => {
  document.querySelector("main").innerHTML = template();
  document.querySelector("nav").style.display = "flex";
  addEventlisteners();
  getInfo;
};
