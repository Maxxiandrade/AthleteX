import Pagination from "./Pagination";
// import items from "./items";
import React from 'react';
import { useState } from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

const Cards = () => {

  const itemList = useSelector(state=>state.items)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(21)

  const lastItemIndex = currentPage * itemsPerPage
  const firstItemIndex = lastItemIndex - itemsPerPage
  const currentItems = itemList.slice(firstItemIndex, lastItemIndex)
  const paginado = (pagenumber) =>{return setCurrentPage(pagenumber)}

  return (
    <>
    <div className="flex">

        <Pagination itemsPerPage={itemsPerPage} items={itemList} paginado={paginado} currentPage={currentPage}/>
    <div className="flex flex-wrap">
      {currentItems.map((item)=>{return <Card 
      id={item.id} 
      nombre={item.nombre}
      precio={item.precio}
      foto={item.foto}/>})}
    </div>
      </div>
    
          </>
  );
};

export default Cards;