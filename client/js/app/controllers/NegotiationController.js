class NegotiationController {
    constructor() {
        let binding = document.querySelector.bind(document);

        this._inputDate = binding('#data');
        this._inputQuantity = binding('#quantidade');
        this._inputValue = binding('#valor');

        this._negotiationList = new NegotiationList(model => this._negotiationView.update(model));

        this._negotiationView = new NegotiationView(binding('#negotiationsView'));

        this._message = new Message();
        this._messageView = new MessageView(binding('#messageView'));
    }

    add(event) {
        event.preventDefault();

        this._negotiationList.add(this._createNegotiation());

        this._message.text = "Negociação adicionada com sucesso";
        this._messageView.update(this._message);

        this._clearForm();
    }

    clear() {
        this._negotiationList.clear();

        this._message.text = "Negociações apagadas com sucesso";
        this._messageView.update(this._message);
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