export default class Counter {
    constructor (items) {
        this._items = items;
        this.items = new Array(items).fill(0)
    }
    Submit (num) { this.items[num-1] += 1; console.log(this.items) }
    inputSanity = (e) => { // PERSIST PLEASE ANGHIRAP NYA ISULAT
        if (!/^\d+$/.test(e.target.value)) {
            e.target.setCustomValidity("Number Only");
        }
        else if (0 >= parseInt(e.target.value)) {
            e.target.setCustomValidity("Out of Range");
        }
        else if (parseInt(e.target.value) >= this.items + 1){ // BUG: for some reason di nag titrigger
            e.target.setCustomValidity("Out of Range");
        }
        else { e.target.setCustomValidity(""); }
    }
}


