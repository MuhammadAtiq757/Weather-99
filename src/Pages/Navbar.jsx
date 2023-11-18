import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content flex justify-between items-center">
                <div className='flex items-center justify-center'>
                <img className='w-20' src="https://i.ibb.co/4FmX3Wg/weather-icon-illustration03-Grap-removebg-preview.png" alt="" />
  <h1 className='text-3xl'>Weather 99</h1>
                </div>
                <div className='text-xl flex gap-2'>
                <img className='w-8 text-white' src="https://i.ibb.co/4RfJFfm/refresh-512-removebg-preview.png" alt="" />
                <h1>Refresh</h1>
                </div>

</div>


        </div>
    );
};

export default Navbar;