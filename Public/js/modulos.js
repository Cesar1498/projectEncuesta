/* César González 
    26/06/2023
    Archivo que hace componentes a las preguntas para poder utilizarlos en HTML
*/

// Importación de componentes de las preguntas
import myStarTypeQuestion from "./components/starQuestion.js";
import myObservationQuestion from "./components/observationQuestion.js";
import myYesOrNoQuestion from "./components/yesOrNoQuestion.js";

// Definir el nombre de los componentes para usarlos en HTML
window.customElements.define("my-star", myStarTypeQuestion);
window.customElements.define("my-observation", myObservationQuestion);
window.customElements.define("my-yesorno", myYesOrNoQuestion);