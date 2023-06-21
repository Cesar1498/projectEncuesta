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
        <form name="formStar" class="formStar">
            <p> ${this.name} </p>
            <!-- svg from https://es.wikipedia.org/wiki/Archivo:Star*.svg -->
            <div class="estrellas">
                <input class=rating id=rating0 type=radio value=0 name=rating checked />
                
                <label class=star for=rating1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 275">
                        <path stroke="#605a00" stroke-width="15" d="M150 25l29 86h90l-72 54 26 86-73-51-73 51 26-86-72-54h90z" />
                    </svg>
                </label>
                <input class=rating id=rating1 type=radio value=1 name=rating />

                <label class=star for=rating2>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 275">
                        <path stroke="#605a00" stroke-width="15" d="M150 25l29 86h90l-72 54 26 86-73-51-73 51 26-86-72-54h90z" />
                    </svg>
                </label>
                <input class=rating id=rating2 type=radio value=2 name=rating />

                <label class=star for=rating3>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 275">
                        <path stroke="#605a00" stroke-width="15" d="M150 25l29 86h90l-72 54 26 86-73-51-73 51 26-86-72-54h90z" />
                    </svg>
                </label>
                <input class=rating id=rating3 type=radio value=3 name=rating />

                <label class=star for=rating4>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 275">
                        <path stroke="#605a00" stroke-width="15" d="M150 25l29 86h90l-72 54 26 86-73-51-73 51 26-86-72-54h90z" />
                    </svg>
                </label>
                <input class=rating id=rating4 type=radio value=4 name=rating />

                <label class=star for=rating5>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 275">
                        <path stroke="#605a00" stroke-width="15" d="M150 25l29 86h90l-72 54 26 86-73-51-73 51 26-86-72-54h90z" />
                    </svg>
                </label>
                <input class=rating id=rating5 type=radio value=5 name=rating />

                <!-- por último el label del rating 0 ( sin calificar ) -->
                <label class=reset for=rating0>reset</label>

                <div id=texto>sin calificar</div>
            </div>
        </form>
        `;
    }
}

export default myStarTypeQuestion;