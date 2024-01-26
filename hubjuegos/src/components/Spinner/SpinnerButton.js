import "./SpinnerButton.css";

const template = () =>
  `<div class="containerSpinnerButton">
   <div class="lds-ripple">
    <div></div>
    <div></div>
   </div>
   <h2>Cargando Filtros</h2>
  </div>
 `;

export const PrintSpinner = () => {
  document.getElementById("SpinnerButtonFilter").innerHTML = template();
};
