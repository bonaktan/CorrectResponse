export default class Counter {
    constructor(items) {
        this.items = items;
        this._itemsCount = new Array(items).fill(0);
        this._mode = true; // true = correct ans, false = incorrect ans
        this._displayNumber = 1;
        this._displayValue = this._itemsCount[this._displayNumber-1]
    }
    get displayNumber() { return this._displayNumber }
    set displayNumber(num) {
        this._displayNumber = num;
        this._displayValue = this._itemsCount[num-1]
    }
    get displayValue() { return this._displayValue}

    get value() { return this._itemsCount }
    inputSanity(e) {
        if (!/^\d+$/.test(e.target.value)) {
            e.target.setCustomValidity("Number Only")
        }
        else if (0 > e.target.value) {
            e.target.setCustomValidity("Out of Range")
        }
        else if (e.target.value < 50){ // BUG: for some reason di nag titrigger
            e.target.setCustomValidity("Out of Range")
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
