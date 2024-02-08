/* Nomenclature
 * Item: Number that is either right or wrong (ex. 15/50, 15 is the item)
 * Value: How many times an item is defined as right/wrong
 * Count: The list of items
 * Population: Max anout a Value can hold
 */

// Packages
import {useState} from 'react';

// Data
import {Globals as globals} from '../data/globals.js';
// import {gridSquareConstructor} from '../utils.js';

// PURPOSE: Store data for the Item/Value/List
const useCounter = () => {
    // eslint-disable-next-line no-unused-vars
    const [items, _setItems] = useState(globals.Items);
    // eslint-disable-next-line no-unused-vars
    const [ValueList, setValueList] = useState(null);
    const InputItem = (e) => {
        e.preventDefault();
        const temp = [...ValueList];
        setValueList(temp);
    };

    return {InputItem, ValueList, ItemCount: items};
};

export default useCounter;
