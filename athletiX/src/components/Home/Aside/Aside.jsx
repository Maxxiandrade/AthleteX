import React from 'react';
import Filters from './Filters';
import Searchbar from './Searchbar';
import Sort from './Sort';

const Aside = () => {
  return (
    <aside className='bg-stone-200 flex flex-col justify-start items-center h-100 w-2/12 border-r border-stone-300 shadow-2xl shad'>
      <div className='flex flex-col juce items-center '>
      <Searchbar/>
      <hr />
      <Filters/>
      <hr />
      <Sort/>
      </div>

    </aside>
  );
};

export default Aside;