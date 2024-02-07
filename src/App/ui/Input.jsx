// Packages
import React from 'react';

const Input = ({InputItem, ValueList}) => {
    return (
        <>
            <form id='InputItem' onSubmit={InputItem}>
                <input></input>
                <button type='submit'>Submit</button>
            </form>
            <div id='ItemTable' className='flex'>
                {ValueList.map((Value, Item) => {
                    return (
                        <p key={Item}>{Item+1}. {Value}</p>
                    );
                })}
            </div>
        </>
    );
};

export default Input;
