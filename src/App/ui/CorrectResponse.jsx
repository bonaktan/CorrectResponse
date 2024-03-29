// Globals
import React from 'react';

// Components
import Navbar from './Navbar.jsx';
import Main from './Main.jsx';

// Custom Hooks
import useDisplaySwaps from '../hooks/useDisplaySwap.js';


// PURPOSE: Root of the app, Contain the Main Hook; Smart Container
const CorrectResponser = () => {
    const [DisplayMode, swapDisplayMode] = useDisplaySwaps();
    return (
        <div className='dark h-100'>
            <Navbar swapDisplayMode={swapDisplayMode} />
            <Main displayMode={DisplayMode}/>
        </div>
    );
};

export default CorrectResponser;
