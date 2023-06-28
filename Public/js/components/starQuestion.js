/* César González 
    26/06/2023
    Componente de la pregunta de calificación de estrellas 
*/

class myStarTypeQuestion extends HTMLElement {
    constructor() {
        super();
        this.name = null;
        this.order = null;
    }

    static get observedAttributes() {
        return ['name', 'order', 'level'];
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[property] = newValue; 
      }

    connectedCallback() {
        this.innerHTML = `
        <form name="formStar${this.level}${this.order}" class="formStar" id="formStar${this.level}${this.order}">
            <div class="divLevel${this.level} row p-2 m-4 rounded" style="background: rgb(217, 236, 255); border:2px solid rgb(3, 55, 109)">
                <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 text-wrap">
                    <p class="m-4 text-sm-start text-break"> ${this.name} </p>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 py-2">
                    <!-- svg from https://es.wikipedia.org/wiki/Archivo:Star*.svg -->
                    <div class="w-100 text-end">
                        <input class="rating" id=formStar${this.level}${this.order}rating0 type=radio value=0 name=formStar${this.level}${this.order}rating checked />
                    
                        <label class="star" for=formStar${this.level}${this.order}rating1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </label>
                        <input class="rating" id=formStar${this.level}${this.order}rating1 type=radio value=1 name=formStar${this.level}${this.order}rating />
                
                        <label class="star" for=formStar${this.level}${this.order}rating2>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </label>
                        <input class="rating" id=formStar${this.level}${this.order}rating2 type=radio value=2 name=formStar${this.level}${this.order}rating />            

                        <label class="star" for=formStar${this.level}${this.order}rating3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </label>
                        <input class="rating" id=formStar${this.level}${this.order}rating3 type=radio value=3 name=formStar${this.level}${this.order}rating />
                    
                        <label class="star" for=formStar${this.level}${this.order}rating4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </label>
                        <input class=rating id=formStar${this.level}${this.order}rating4 type=radio value=4 name=formStar${this.level}${this.order}rating />
                
                        <label class="star" for=formStar${this.level}${this.order}rating5>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </label>
                        <input class=rating id=formStar${this.level}${this.order}rating5 type=radio value=5 name=formStar${this.level}${this.order}rating />

                        <!-- por último el label del rating 0 ( sin calificar ) -->
                        <label class="reset text-center rounded-2" style="background: rgb(3, 55, 109); color: white; font-size: .8rem;" for=formStar${this.level}${this.order}rating0>reset</label>    
                    </div>
                    
                    <div class="text-end" id=formStar${this.level}${this.order}texto>sin calificar</div>
                </div>
            </div>
        </form>
            `;
    }
}

export default myStarTypeQuestion;