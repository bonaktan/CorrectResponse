import {Globals as globals} from '../data/globals.js';

function gridSquareConstructor(Value) {
    // PURPOSE: split an array into n subarrays with length 10
    const subarrayLength = globals.subarrayLength;
    const subarrayCount = Math.floor(Value.length/subarrayLength);
    const valueCache = Array.from(
        {length: subarrayCount}, () => new Array(subarrayLength).fill(0));

    let subarrayCoord = 0;
    let subarrayarrayCoord = 0;
    for (let i = 1; i <= Value.length; i++) {
        valueCache[subarrayCoord][subarrayarrayCoord] = i;
        if (subarrayarrayCoord >= subarrayLength - 1) {
            subarrayarrayCoord = 0;
            subarrayCoord += 1;
        } else {
            subarrayarrayCoord += 1;
        }
    }
    return valueCache;
    // TODO: fINISH AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
}


export default gridSquareConstructor;
