// import {useState} from 'react';

import {Globals as globals} from '../data/globals.js';
import {DisplayMode as enumDisplayMode} from '../data/enums';

const useDisplaySwaps = () => {
    const displayMode = globals().DisplayMode.current;
    const SwapDisplay = (e) => {
        displayMode = (displayMode === enumDisplayMode.Input) ?
            enumDisplayMode.Display :
            enumDisplayMode.Input;
    };
    return (displayMode, SwapDisplay);
};

export default useDisplaySwaps;
