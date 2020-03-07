class NegotiationList  {
    constructor(a) {
        this._negotiations = [];
        this._a = a;
    }

    add(negotiation) {
        this._negotiations.push(negotiation);
        this._a(this);
    }

    get negotiations() {
        return this._negotiations;
    }

    clear() {
        this._negotiations = [];
        this._a(this);
    }
}