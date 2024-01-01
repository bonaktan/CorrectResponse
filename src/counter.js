export default class Counter {
    constructor(items) {
        this.items = items;
        this.itemsCount = [] // generated na sya sa frontend
        this._mode = true; // true = correct ans, false = incorrect ans
        this._displayNumber = 1;
        this._displayValue = this.itemsCount[this._displayNumber-1]
        this.displayTable = Math.floor(items/2)
        this.Update = (event) => { this.itemsCount[parseInt(event.target[0].value)-1] += 1 }
        this.itemsUpdate = []
        this.inputSanity = (e) => { // NOTE: out of date, update to mui
            if (!e.target.value) { return true;}
            if (!/^\d+$/.test(e.target.value)) {
                e.target.setCustomValidity("Number Only")
            }
            else if (0 >= parseInt(e.target.value)) {
                e.target.setCustomValidity("Out of Range")
            }
            else if (parseInt(e.target.value) >= this.items + 1){ // BUG: for some reason di nag titrigger
                e.target.setCustomValidity("Out of Range")
            }
            else { e.target.setCustomValidity(""); return true }
            return false;
        }
    }
    get displayNumber() { return this._displayNumber }
    set displayNumber(num) {
        this._displayNumber = num;
        this._displayValue = this.itemsCount[num-1]
    }
    get displayValue() { return this._displayValue}

    get value() { return this.itemsCount }
    

}


