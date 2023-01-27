import React from 'react';

import './App.css';

function App() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-l from-gray-300 to-slate-800'>
      <div className='block rounded-lg drop-shadow-lg shadow-lg p-10 border border-gray-100 bg-gray-300  hover:bg-slate-400 cursor-pointer'>
        <h1 className='text-5xl lg:text-6xl justify-center items-center text-center font-extrabold leading-tighter hover:text-7xl ease-in-out duration-700 '>
          Hello{' '}
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-400'>
            Cohort 9 !
          </span>
        </h1>
      </div>
    </div>
  );
}

export default App;
