/* César González 
    26/06/2023
    Archivo que controla la parte de las preguntas y la calificación de la pregunta de estrellas
*/

// Importación de componentes de las preguntas
import myStarTypeQuestion from "./components/starQuestion.js";
import myObservationQuestion from "./components/observationQuestion.js";
import myYesOrNoQuestion from "./components/yesOrNoQuestion.js";

// Definir el nombre de los componentes para usarlos en HTML
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
    
    // Validar cuando es menor de 5 estrellas
    if (estrellas > 0 && estrellas < 5){
      addNextQuestions(nameFormStar);
    }

  }

  function addNextQuestions(nameFormStar){
    const array = [{
      order: 0,
      pregunta: "¿Qué te pareció el material?"
    },
    {
      order: 1,
      pregunta: "¿Qué te pareció la información"
    },
    {
      order: 2,
      pregunta: "Agrgegar observaciones"
    }];

    let newElement = document.createElement('div'); 
    newElement.innerHTML = '<hr class="col-xs-12 w-75">';
    array.forEach((item) => {  
      if (!item.pregunta.includes("Agrgegar observaciones")){
        newElement.innerHTML += "<my-star name=" + item.pregunta + " order=" + item.order + " level=1></my-star>";
      }
      else{
        newElement.innerHTML += "<my-observation name=" + item.pregunta + " order=" + item.order + " level=1></my-observation>";
      }
    }); 
    document.getElementById(nameFormStar).appendChild(newElement);
  }
  //#endregion