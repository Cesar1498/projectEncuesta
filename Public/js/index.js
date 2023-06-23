import myStarTypeQuestion from "./components/starQuestion.js";
import myObservationQuestion from "./components/observationQuestion.js";
import myYesOrNoQuestion from "./components/yesOrNoQuestion.js";

window.customElements.define("my-star", myStarTypeQuestion);
window.customElements.define("my-observation", myObservationQuestion);
window.customElements.define("my-yesorno", myYesOrNoQuestion);

//#region Calificación de Estrellas
/* Funciones para Calificación de Estrellas */
$('.formStar').click(function () {
  //nombre del form donde se le da click
  const nameFormStar = $(this).prop('name');
  // Me trae el objeto de form
  const formStar = document.getElementsByName(nameFormStar);
  Array.from(formStar).forEach(item => {
    Array.from(item).forEach((radio) =>{
      radio.addEventListener('change', getRating(nameFormStar, radio));
    })
  })
});

  // buscar el radiobutton checked y armar el texto con el valor ( 0 - 5 )
  function getRating(nameFormStar, radio) {
    let estrellas = 0;
    if (radio.checked) {
      estrellas = radio.value;
      document.getElementById(nameFormStar + "texto").innerHTML = (
        0 < estrellas ? estrellas + " estrella" + (1 < estrellas ? "s" : "") : "sin calificar"
      );
    }
    
    if (estrellas > 0 && estrellas < 5){
      addNextQuestions(nameFormStar);
    }

  }

  function addNextQuestions(nameFormStar){
    let newElement = document.createElement('div');

  }
  //#endregion