class View {
    constructor(element) {
        this._element = element;
    }

    template() {
        throw new Error("template method need be created");
    }

    update(model) {
        this._element.innerHTML = this.template(model);
    }
}