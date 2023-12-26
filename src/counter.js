class Counter {
    constructor(items) {
        this.items = items;
        this.itemsCount = new Array(items).fill(0);
        this.mode = true; // true = correct ans, false = incorrect ans

    }
}

export default Counter