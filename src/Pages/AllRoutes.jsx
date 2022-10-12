import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Healthcare from './Healthcare'
import Home from './Home'
import Products from './Products'
import SingleProduct from './SingleProduct'

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}>

        </Route>
        <Route path="/healthcare" element={<Healthcare/>}></Route>
        <Route path="/healthcare/products/:cat" element={<Products/>}></Route>
        <Route path='/healthcare/product/:id' element={<SingleProduct/>}></Route>
    </Routes>

  )
}

export default AllRoutes