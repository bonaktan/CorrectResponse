// Packages
import React from 'react';

// import {useRef} from 'react';
import {Globals as globals} from '../data/globals.js';

// PURPOSE: Contain refs for the Input Cells
const Input = ({InputItem, ValueList, ItemCount, CellRefs}) => {
    return (
        <>
            <form id='InputItem' onSubmit={InputItem}>
                <input placeholder='Input'></input>
                <button type='submit'>Submit</button>
            </form>
            <div id='ItemTable' className='flex gap-4'>
                <InputTable
                    ValueList={ValueList}
                    ItemCount={ItemCount}
                    CellRefs={CellRefs} />
            </div>
        </>
    );
};

// PURPOSE: Properly render the input Table (using useref)
const InputTable = ({ValueList, ItemCount, CellRefs}) => {
    return (
        <>
            {ValueList.map((Row, key) => {
                return (
                    <InputRow
                        Row={Row}
                        Offset={key}
                        key={key}
                        CellRefs={CellRefs} />
                );
            })}
        </>
    );
};

const InputRow = ({Row, Offset, CellRefs}) => {
    const RowWidth = globals.subarrayLength;
    const ItemCountStart = RowWidth * Offset;
    return (
        <div>
            {Row.map((Item, key) => {
                const ItemCount = ItemCountStart + key + 1;
                return (
                    <p
                        ref={(el) => CellRefs.current[ItemCount-1] = el}
                        key={ItemCount}>
                        {ItemCount}. {Item}
                    </p>
                );
            })}
        </div>
    );
};
export default Input;
