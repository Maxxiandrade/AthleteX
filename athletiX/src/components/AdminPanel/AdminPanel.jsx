import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import AddItem from './AddItem'
import ItemList from './ItemList'

const AdminPanel = () => {
  return (
    <>
   <Navbar/>
   <AddItem/>
   <ItemList/>
    </>
  )
}

export default AdminPanel