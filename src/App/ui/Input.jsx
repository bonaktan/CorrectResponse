// Packages
import React from 'react';

import {useRef} from 'react';
// import {Globals as globals} from '../data/globals';

// PURPOSE: Contain refs for the Input Cells
const Input = ({InputItem, ValueList, ItemCount}) => {
    const itemRefs = useRef(new Array(ItemCount));
    return (
        <>
            <form id='InputItem' onSubmit={InputItem}>
                <input placeholder='Input'></input>
                <button type='submit'>Submit</button>
            </form>
            <div id='ItemTable' className='flex gap-4 '>
                <InputRows
                    ValueList={ValueList}
                    ItemCount={ItemCount}
                    itemRefs={itemRefs}/>
            </div>
        </>
    );
};

const InputRows = ({ValueList, ItemCount, itemRefs}) => {
    return <p>tite</p>;
};
export default Input;
