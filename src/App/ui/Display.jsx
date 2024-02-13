import React from 'react';

const Display = () => {
    return (
        <>
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
                id='DisplayNumber'
                className='leading-none h-100'>
                    420
            </div>
        </>
    );
};

export default Display;
