class myStarTypeQuestion extends HTMLElement {
    constructor() {
        super();
        this.name;
        this.order;
    }

    static get observedAttributes() {
        return ['name', 'order'];
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[property] = newValue; 
      }

    connectedCallback() {
        this.innerHTML = `
        <form name="formStar${this.order}" class="formStar">
            <div class="row p-4 m-4 rounded" style="background: rgb(217, 236, 255); border:2px solid rgb(3, 55, 109)">
                <div class="col-sm-8">
                    <p class="text-right"> ${this.name} </p>
                </div>
                <div class="col-sm-4">
                    <!-- svg from https://es.wikipedia.org/wiki/Archivo:Star*.svg -->

                    <input class="rating" id=formStar${this.order}rating0 type=radio value=0 name=formStar${this.order}rating checked />
                    
                    <label class=star for=formStar${this.order}rating1>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 275" width="30" height="30">
                            <path stroke="#605a00" stroke-width="15" d="M150 25l29 86h90l-72 54 26 86-73-51-73 51 26-86-72-54h90z" />
                        </svg>
                    </label>
                    <input class="rating" id=formStar${this.order}rating1 type=radio value=1 name=formStar${this.order}rating />

                    <label class=star for=formStar${this.order}rating2>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 275" width="30" height="30">
                            <path stroke="#605a00" stroke-width="15" d="M150 25l29 86h90l-72 54 26 86-73-51-73 51 26-86-72-54h90z" />
                        </svg>
                    </label>
                    <input class=rating id=formStar${this.order}rating2 type=radio value=2 name=formStar${this.order}rating />

                    <label class=star for=formStar${this.order}rating3>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 275" width="30" height="30">
                            <path stroke="#605a00" stroke-width="15" d="M150 25l29 86h90l-72 54 26 86-73-51-73 51 26-86-72-54h90z" />
                        </svg>
                    </label>
                    <input class=rating id=formStar${this.order}rating3 type=radio value=3 name=formStar${this.order}rating />

                    <label class=star for=formStar${this.order}rating4>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 275" width="30" height="30">
                            <path stroke="#605a00" stroke-width="15" d="M150 25l29 86h90l-72 54 26 86-73-51-73 51 26-86-72-54h90z" />
                        </svg>
                    </label>
                    <input class=rating id=formStar${this.order}rating4 type=radio value=4 name=formStar${this.order}rating />

                    <label class=star for=formStar${this.order}rating5>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 275" width="30" height="30">
                            <path stroke="#605a00" stroke-width="15" d="M150 25l29 86h90l-72 54 26 86-73-51-73 51 26-86-72-54h90z" />
                        </svg>
                    </label>
                    <input class=rating id=formStar${this.order}rating5 type=radio value=5 name=formStar${this.order}rating />

                    <!-- por último el label del rating 0 ( sin calificar ) -->
                    <label class="reset p-2 text-center w-25 rounded-2" style="background: rgb(3, 55, 109); color: white; font-size: .8rem;" for=formStar${this.order}rating0>reset</label>

                    <div id=formStar${this.order}texto>sin calificar</div>
                </div>
            </div>
        </form>
            `;
    }
}

export default myStarTypeQuestion;