class myObservationQuestion extends HTMLElement{
    constructor(){
        super();
        this.name;
        this.order;
    }

    static get observedAttributes(){
        return ['name', 'order', 'level'];
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[property] = newValue; 
    }
    
    connectedCallback() {
        this.innerHTML = `
        <form name="formPregunta" class="formPregunta">
            <div class="divLevel${this.level} row p-2 m-4 rounded-2" style="background: rgb(217, 236, 255); border:2px solid rgb(3, 55, 109);">
                <div class="col-sm-4 col-md-4 col-lg-6 col-xl-6 text-wrap">
                    <p class="m-4 text-sm-start text-break"> ${this.name} </p>
                </div>
                <div class="col-sm-8 col-md-8 col-lg-6 col-xl-6">
                    <textarea class="form-control" id="myTextArea" rows="2" cols="2"></textarea>
                </div>
            </div>
        </form>
        `;
    }
}

export default myObservationQuestion;