class myYesOrNoQuestion extends HTMLElement{
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
        <form id="formPregunta${this.order}">
            <p> ${this.name} </p>
            
        </form>
        `;
    }
}

export default myYesOrNoQuestion;