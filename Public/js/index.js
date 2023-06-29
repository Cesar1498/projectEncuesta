/* César González 
    26/06/2023
    Archivo que controla la calificación de la pregunta de estrellas
*/

//#region Calificación de Estrellas
/* Funciones para Calificación de Estrellas */
lista = [];

window.addEventListener("click", function(e){
    if(e.target.name != undefined){
        let nameFormStar = e.target.name;
        nameFormStar = nameFormStar.replace('rating', '');
        //nombre del form donde se le da click
        // Me trae el objeto de form
        let incluye = lista.includes(nameFormStar);
        const formStar = document.getElementsByName(nameFormStar);
        Array.from(formStar).forEach(item => {
            Array.from(item).forEach((radio) => {
                radio.addEventListener('change', getRating(nameFormStar, radio, incluye));
            })
        })
    
        if (!incluye)
            lista.push(nameFormStar);
    }
}); 

// buscar el radiobutton checked y armar el texto con el valor ( 0 - 5 )
function getRating(nameFormStar, radio, incluye) {
    let estrellas = 0;
    if (radio.checked) {
        estrellas = radio.value;
        document.getElementById(nameFormStar + "texto").innerHTML = (
        0 < estrellas ? estrellas + " estrella" + (1 < estrellas ? "s" : "") : "sin calificar"
        );
    }
    // Validar cuando es menor de 5 estrellas
    if(!incluye){
        if (estrellas > 0 && estrellas < 5) 
            addNextQuestions(nameFormStar);
    }

}

function addNextQuestions(nameFormStar) {
  const array = [{
    order: 0,
    pregunta: '¿Qué&nbspte&nbsppareció&nbspel&nbspmaterial?',
  },
  {
    order: 1,
    pregunta: '¿Qué&nbspte&nbsppareció&nbspla&nbspinformación?',
  },
  {
    order: 2,
    pregunta: 'Agrgegar&nbspobservaciones',
  }];

  //&nbsp
  let newElement = document.createElement('null');
  newElement.innerHTML = `<hr class="col-xs-12 w-75">`;
  array.forEach((item) => {
    if (!item.pregunta.includes("Agrgegar&nbspobservaciones")) {
      newElement.innerHTML += `<my-star name=${item.pregunta} order=${item.order} level=1></my-star>`;
    }
    else {
      newElement.innerHTML += `<my-observation name=${item.pregunta} order=${item.order} level=1></my-observation>`;
    }
  });
  document.getElementById(nameFormStar).appendChild(newElement);
}
//#endregion