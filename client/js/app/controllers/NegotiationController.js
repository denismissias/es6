class NegotiationController {
    constructor() {
        let binding = document.querySelector.bind(document);

        this._inputDate = binding('#data');
        this._inputQuantity = binding('#quantidade');
        this._inputValue = binding('#valor');
    }

    add(event) {
        event.preventDefault();

        let date = new Date(...this._inputDate.value.split('-').map((item, index) => item - index % 2));

        let negotiation = new Negotiation(date, this._inputQuantity.value, this._inputValue.value);

        console.log(negotiation);
    }
}