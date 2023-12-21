import Pagination from "./Pagination";
import items from "./items";
import React from 'react';
import { useState } from "react";
import Card from "./Card";

const Cards = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(21)

  const lastItemIndex = currentPage * itemsPerPage
  const firstItemIndex = lastItemIndex - itemsPerPage
  const currentItems = items.slice(firstItemIndex, lastItemIndex)
  const paginado = (pagenumber) =>{return setCurrentPage(pagenumber)}

  return (
    <>
    <div className="flex">

        <Pagination itemsPerPage={itemsPerPage} items={items} paginado={paginado} currentPage={currentPage}/>
    <div className="flex flex-wrap">
      {currentItems.map((item, index)=>{return <Card 
      id={index} 
      nombre={item.nombre}
      precio={item.precio}
      foto={item.foto}/>})}
    </div>
      </div>
    
          </>
  );
};

export default Cards;