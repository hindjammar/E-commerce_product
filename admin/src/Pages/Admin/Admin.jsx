import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListPRoduct'

const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
          <Route element={<AddProduct/>} path='/addproduct' />
          <Route element={<ListProduct/>} path='/listproduct' />

        </Routes>
    </div>
  )
}

export default Admin
