import React from 'react';
import Filters from './Filters';
import Searchbar from './Searchbar';
import Sort from './Sort';

const Aside = ({paginado}) => {
  return (
    <aside className='bg-purple-50 flex flex-col justify-start items-center h-100 min-w-52 border-r border-stone-300 shadow-2xl shad'>
      <div className='flex flex-col juce items-center '>
      <Searchbar/>
      <hr />
      <Filters paginado={paginado}/>
      <hr />
      <Sort/>
      </div>

    </aside>
  );
};

export default Aside;