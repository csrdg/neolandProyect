import { getUser } from "../global/state/globalstate";
import {
  Login,
  PrintPokemonPage,
  printTemplateDashboard,
  PrintPokeMatch,
  PrintAhorcado,
} from "../pages";

export const initControler = (pagesRender) => {
  switch (pagesRender) {
    case undefined:
      localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login();
      break;
    case "Pokemon":
      PrintPokemonPage();
      break;
    case "Dashboard":
      printTemplateDashboard();
      break;
    case "Ahorcado":
      PrintAhorcado();
      break;
    case "Login":
      Login();
      break;
    case "PokeMatch":
      PrintPokeMatch();
      break;
  }
};
