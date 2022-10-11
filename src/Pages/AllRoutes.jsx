import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Healthcare from './Healthcare'
import Home from './Home'

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}>

        </Route>
        <Route path="/healthcare" element={<Healthcare/>}></Route>
    </Routes>

  )
}

export default AllRoutes