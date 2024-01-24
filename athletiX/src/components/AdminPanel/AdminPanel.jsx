import React, { useEffect } from 'react'
import Navbar from '../Home/Navbar/Navbar'
import AddItem from './AddItem'
import ItemList from './ItemList'
import Pucharses from './Pucharses'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

const AdminPanel = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.userInfo);
  const isAdmin = user.isAdmin;
  if(isAdmin) return (
    <>
   <Navbar/>
   <AddItem/>
   <ItemList/>
   <Pucharses/>
    </>
  )
  navigate('/home')
}

export default AdminPanel