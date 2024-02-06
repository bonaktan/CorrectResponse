import React from 'react';

const Navbar = ({swapDisplayMode}) => {
    return (
        <div id="NavbarRoot">
            <p>Navbar</p>
            <button onClick={swapDisplayMode}>test</button>
        </div>
    );
};

export default Navbar;
