import { resetGame } from "../../components";
import "./PokeMatchGame.css";

const template = () => `
    <div id="PokeMatchGame">
     <h1 id="titleGame">POKE MATCH</h1>
     <div id="containerBoardGame"></div>
     <button id="btnReset">RESET!</div>
    </div>
`;

export const PrintPokeMatch = () => {
  document.querySelector("main").innerHTML = template();

  resetGame();
};
