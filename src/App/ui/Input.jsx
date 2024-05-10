// Packages
import React from 'react';

import {Globals as globals} from '../data/globals.js';

// PURPOSE: Contain refs for the Input Cells
const Input = ({InputItem, ValueList, ItemCount, CellRefs}) => {
    return (
        <>
            <form
                id="InputItem"
                onSubmit={InputItem}
                className="flex gap-2 pb-4"
            >
                <input
                    placeholder="Input"
                    className="w-60 bg-mirage-950
                        outline outline-1 rounded-md
                        text-xs pl-2 ml-4"
                ></input>
                {/* maybe put button inside input? */}
                <button
                    type="submit"
                    className="dark:bg-mirage-600
                        p-2 rounded-md text-xs
                        hover:bg-mirage-300"
                >
                    Submit
                </button>
            </form>
            <div id="ItemTable" className="grid grid-cols-5 text-center">
                <InputTable
                    ValueList={ValueList}
                    ItemCount={ItemCount}
                    CellRefs={CellRefs}
                />
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
                        CellRefs={CellRefs}
                    />
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
                        ref={(ref) => (CellRefs.current[ItemCount - 1] = ref)}
                        key={`Cell${ItemCount},${
                            CellRefs.current[ItemCount - 1]
                        }`}
                    >
                        {ItemCount}. {Item}
                    </p>
                );
            })}
        </div>
    );
};
export default Input;
