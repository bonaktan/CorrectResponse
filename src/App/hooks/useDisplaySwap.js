// Packages
import {useState} from 'react';

// Data
import {Globals as globals} from '../data/globals.js';
import {DisplayMode as enumDisplayMode} from '../data/enums';

// PURPOSE: Swap Input and Display with a custom setter
const useDisplaySwaps = () => {
    const [displayMode, setDisplayMode] = useState(globals.DisplayMode);

    const SwapDisplay = (e) => {
        setDisplayMode((displayMode === enumDisplayMode.Input) ?
            enumDisplayMode.Display :
            enumDisplayMode.Input,
        );
    };
    return [displayMode, SwapDisplay];
};

export default useDisplaySwaps;
