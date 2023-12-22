import Pagination from "./Pagination";
// import items from "./items";
import React from 'react';
import { useState } from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { movePage } from "../../redux/actions/actions";

const Cards = () => {
  const dispatch = useDispatch()
  const itemList = useSelector(state=>state.items)
  const currentPage = useSelector(state=>state.currentPage)
  const [itemsPerPage, setItemsPerPage] = useState(21)

  const lastItemIndex = currentPage * itemsPerPage
  const firstItemIndex = lastItemIndex - itemsPerPage
  const currentItems = itemList.slice(firstItemIndex, lastItemIndex)
  const paginado = (pagenumber) =>{dispatch(movePage(pagenumber))}

  return (
    <>
      <div className="flex flex-col items-center">
  <Pagination itemsPerPage={itemsPerPage} items={itemList} paginado={paginado} currentPage={currentPage}/>
  
  <div className="flex justify-center">
    <div className="flex flex-wrap">
      {currentItems.map((item) => (
        <Card 
          key={item.id}
          id={item.id} 
          nombre={item.nombre}
          precio={item.precio}
          foto={item.foto}
        />
      ))}
    </div>
  </div>
</div>
          </>
  );
};

export default Cards;