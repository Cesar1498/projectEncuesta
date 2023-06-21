class myObservationQuestion extends HTMLElement{
    constructor(){
        super();
        this.name;
        this.order;
    }

    static get observedAttributes(){
        return ['name', 'order'];
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[property] = newValue; 
    }
    
    connectedCallback() {
        this.innerHTML = `
        <form name="formPregunta">
            <p> ${this.name} </p>
            <textarea id="myTextArea" rows="2" cols="60"></textarea>
        </form>
        `;
    }
}

export default myObservationQuestion;