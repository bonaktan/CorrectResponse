import React from 'react';

import Navbar from './Navbar.jsx';
import Main from './Main.jsx';

import useDisplaySwaps from '../hooks/useDisplaySwap.js';
// PURPOSE: Root of the app, Contain the Main Hook; Smart Container
const CorrectResponser = () => {
    const [DisplayMode, swapDisplayMode] = useDisplaySwaps();
    return (
        <>
            <Navbar swapMode={swapDisplayMode} />
            <Main displayMode={DisplayMode}/>
        </>
    );
};

export default CorrectResponser;
