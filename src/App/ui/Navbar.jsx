// Packages
import React from 'react';

// Icons
import {VisibilityIcon} from '../assets/icons/eye.jsx';
const Navbar = ({swapDisplayMode}) => {
    return (
        <div
            id="NavbarRoot"
            className='flex h-10 items-center justify-around bg-mirage-900
                rounded-b-md'>
            <p className='flex-initial w-64 font-bold hover:cursor-default'>
                Correct Responser
            </p>
            <button
                onClick={swapDisplayMode}
                className='h-8 w-8
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
