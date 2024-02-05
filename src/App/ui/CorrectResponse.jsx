import React from 'react';

import Navbar from './Navbar.jsx';
import Main from './Main.jsx';

import useDisplaySwaps from '../hooks/useDisplaySwap.js';
// PURPOSE: Root of the app, Contain the Main Hook; Smart Container
const CorrectResponser = () => {
    const DisplaySwaps = useDisplaySwaps();
    return (
        <>
            <Navbar />
            <Main />
        </>
    );
};

export default CorrectResponser;
