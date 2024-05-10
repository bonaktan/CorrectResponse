import React from 'react';

const Display = () => {
    return (
        <>
            <div className='flex justify-center gap-10'>
                <div className='flex justify-center gap-2'>
                    <button className='dark:bg-mirage-800 p-2 rounded-l'>
                        &lt;&lt;
                    </button>
                    <button className='dark:bg-mirage-800 p-2 rounded-r'>
                        &lt;
                    </button>
                </div>
                <p className='p-2'>count/count</p>
                <div className='flex justify-center gap-2'>
                    <button className='dark:bg-mirage-800 p-2 rounded-l'>
                        &gt;
                    </button>
                    <button className='dark:bg-mirage-800 p-2 rounded-r'>
                        &gt;&gt;
                    </button>
                </div>
            </div>
            <div
                id='DisplayNumber'
                className='leading-none h-100 text-center'>
                    1
            </div>
        </>
    );
};

export default Display;
