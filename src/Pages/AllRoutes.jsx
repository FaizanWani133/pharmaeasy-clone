import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ExpressDelivery } from './ExpressDelivery'
import Healthcare from './Healthcare'
import Home from './Home'
import NotFound from './NotFound'
import Products from './Products'
import Search from './Search'
import SingleProduct from './SingleProduct'

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/healthcare" element={<Healthcare/>}></Route>
        <Route path="/healthcare/products/:cat" element={<Products/>}></Route>
        <Route path='/healthcare/product/:id' element={<SingleProduct/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
        <Route path='/search/:name' element={<Search/>}></Route>
        <Route path='/delivery' element={<ExpressDelivery/>}></Route>
    </Routes>

  )
}

export default AllRoutes