import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Healthcare from './Healthcare'
import Home from './Home'
<<<<<<< HEAD
import Products from './Products'
=======
import NotFound from './NotFound'
import Products from './Products'
import Search from './Search'
>>>>>>> 80d69a9fa6ed6a537c7bb22ae9f8fbe0373af0cf
import SingleProduct from './SingleProduct'

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}>

        </Route>
        <Route path="/healthcare" element={<Healthcare/>}></Route>
        <Route path="/healthcare/products/:cat" element={<Products/>}></Route>
        <Route path='/healthcare/product/:id' element={<SingleProduct/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
        <Route path='/search/:name' element={<Search/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
    </Routes>

  )
}

export default AllRoutes