import {useRef} from 'react';
import {DisplayMode as enumDisplayMode} from './enums.js';

const Globals = () => {
    const DisplayMode = useRef(enumDisplayMode.Input);
    return {DisplayMode};
};

export {Globals};
