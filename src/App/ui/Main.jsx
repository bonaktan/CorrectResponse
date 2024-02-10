// Packages
import React from 'react';
import {DisplayMode as enumDisplayMode} from '../data/enums.js';

// Components
import Input from './Input.jsx';

// Custom Hooks
import useCounter from '../hooks/useCounter.js';


// PURPOSE: Facilitate the DisplayMode swaps; Contain Counter Props
const Main = ({displayMode}) => {
    const Counter = useCounter();
    return (
        <div className='m-3'>
            {(displayMode === enumDisplayMode.Input) ?
                <Input {...Counter}/>:
                <p>Display</p>
            }
        </div>
    );
};


export default Main;
