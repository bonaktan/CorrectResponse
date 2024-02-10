// Packages
import React from 'react';

// Icons
import {VisibilityIcon} from '../assets/icons/eye.jsx';
const Navbar = ({swapDisplayMode}) => {
    return (
        <div
            id="NavbarRoot"
            className='flex items-center justify-around dark:bg-mirage-900
                rounded-b-md
                pt-2 pb-2'>
            <p className='flex-initial w-64 font-bold hover:cursor-default'>
                Correct Responser
            </p>
            <button
                onClick={swapDisplayMode}
                className='h-9 w-9
                    bg-mirage-600
                    flex items-center justify-center
                    rounded-md
                    hover:bg-mirage-200'>
                <VisibilityIcon />
            </button>
        </div>
    );
};

export default Navbar;
