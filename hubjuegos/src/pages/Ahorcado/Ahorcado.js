import { PrintButtonLetras } from "../../components";
import { game_over, id, iniciar } from "../../utils";
import "./Ahorcado.css";

const template = () => `  <img id="imagen" src="img/img0.png" alt="Ahorcado" />
<div>
    <p id="palabra_a_adivinar">
    </p>
    <button id="jugar">Obtener palabra</button>

    <p id="resultado"></p>

    <div id="letras"></div>
</div>`;

const addListeners = () => {
  const btn = id("jugar");
  btn.addEventListener("click", iniciar);
};

export const PrintAhorcado = () => {
  document.querySelector("main").innerHTML = template();
  PrintButtonLetras();
  addListeners();
  game_over();
};
