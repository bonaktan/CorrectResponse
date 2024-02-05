import {useRef} from 'react';

const Count = (n) => {
    const items = useRef(n);
    return {
        items,
    };
};

export default Count;
