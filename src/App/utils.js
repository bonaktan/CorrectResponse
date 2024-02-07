import {Globals as globals} from './data/globals.js';

function SquaringAGrid(Value) {
    // PURPOSE: split an array into n subarrays with length 10
    const subarrayLength = globals.subarrayLength;
    const subarrayCount = Math.floor(Value.length/subarrayLength);
    const valueCache = Array.from({length: rows}, () => new Array(subarrayLength));
    // TODO: fINISH AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
}

export {SquaringAGrid};
