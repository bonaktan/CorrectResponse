import React from 'react';

const Display = () => {
    return (
        <div className='flex flex-col columns-2 h-dvh'>
            <div className='flex justify-center gap-10'>
                <div className='flex justify-center gap-2'>
                    <button className='dark:bg-mirage-800'>
                        &lt;&lt;
                    </button>
                    <button className='dark:bg-mirage-800'>
                        &lt;
                    </button>
                </div>
                <p>count/count</p>
                <div className='flex justify-center gap-2'>
                    <button className='dark:bg-mirage-800'>&gt;</button>
                    <button className='dark:bg-mirage-800'>&gt;&gt;</button>
                </div>
            </div>
            <div
                className='flex leading-none
                    items-center justify-center
                    text-9xl'>
                <p className='text-center align-middle xs:'>420</p>
            </div>
        </div>
    );
};

export default Display;
