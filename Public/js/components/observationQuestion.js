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
        <form name="formPregunta" class="formPregunta">
            <div class="row p-4 m-4 rounded-2" style="background: rgb(217, 236, 255); border:2px solid rgb(3, 55, 109)">
                <div class="col-sm-8">
                    <p class="text-right"> ${this.name} </p>
                </div>
                <div class="col-sm-4">
                    <textarea class="form-control" id="myTextArea" rows="2" cols="8"></textarea>
                </div>
            </div>
        </form>
        `;
    }
}

export default myObservationQuestion;