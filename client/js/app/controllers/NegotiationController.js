class NegotiationController {
    constructor() {
        let binding = document.querySelector.bind(document);

        this._inputDate = binding('#data');
        this._inputQuantity = binding('#quantidade');
        this._inputValue = binding('#valor');
        this._negotiationList = new NegotiationList();
        this._negotiationView = new NegotiationView(document.getElementById('negotiationsView'));

        this._negotiationView.update(this._negotiationList);
    }

    add(event) {
        event.preventDefault();

        this._negotiationList.add(this._createNegotiation());
        this._negotiationView.update(this._negotiationList);
        this._clearForm();
        
        console.log(this._negotiationList.negotiations);
    }

    _createNegotiation() {
        let date = DateHelper.textToDate(this._inputDate.value);

        return new Negotiation(date, this._inputQuantity.value, this._inputValue.value);
    }

    _clearForm() {
        this._inputDate.value = "";
        this._inputQuantity.value = 1,
        this._inputValue.value = 0.0;

        this._inputDate.focus();
    }
}