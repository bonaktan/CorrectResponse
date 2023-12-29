export default class Counter {
    constructor(items) {
        this.items = items;
        this._itemsCount = new Array(items).fill(0);
        this._mode = true; // true = correct ans, false = incorrect ans
    }
    get value() { return this._itemsCount }
    inputSanity(e) {
        if (!/^\d+$/.test(e.target.value)) {
            e.target.setCustomValidity("Number Only")
        }
        else { e.target.setCustomValidity("") }
    }
    Update(event) { // receives an event object
        event.preventDefault()
        let input = event.target[0].value
        alert(input)
        // parse this shit.
    }
}
