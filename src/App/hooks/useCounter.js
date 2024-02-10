/* Nomenclature
 * Item: Number that is either right or wrong (ex. 15/50, 15 is the item)
 * Value: How many times an item is defined as right/wrong
 * Count: The list of items
 * Population: Max anout a Value can hold
 */

// Packages
import {useState, useRef} from 'react';

// Data
import {Globals as globals} from '../data/globals.js';
import {gridSquareConstructor} from '../utils.js';

// PURPOSE: Store data for the Item/Value/List
const useCounter = () => {
    // eslint-disable-next-line no-unused-vars
    const [items, _setItems] = useState(globals.Items);
    const [ValueList, setValueList] = useState(
        gridSquareConstructor(new Array(items).fill(0)));
    const CellRefs = useRef(new Array(items)); // used for the accessibility

    const InputItem = (e) => {
        e.preventDefault();
        const temp = [...ValueList];

        const RowCoord = Math.floor((parseInt(e.target[0].value)-1) /
            globals.subarrayLength);
        const ColumnCoord = (parseInt(e.target[0].value)-1) -
            RowCoord*globals.subarrayLength;
        temp[RowCoord][ColumnCoord] += 1;

        setValueList(temp);
        e.target[0].value = '';
    };
    return {InputItem, ValueList, ItemCount: items, CellRefs};
};

export default useCounter;
