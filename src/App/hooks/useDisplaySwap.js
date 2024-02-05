// import {useState} from 'react';
// import { DisplayMode as enumDisplayMode} from '../data/enums';

const useDisplaySwaps = () => {
    let globals = '';
    fetch('../data/defaults.js')
        .then((r) => r.json())
        .then((data) => return data);
    //  const [DisplayMode, _useDisplayMode] = useState()
};

export default useDisplaySwaps;
