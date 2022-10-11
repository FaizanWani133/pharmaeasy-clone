import { Box } from '@chakra-ui/react'
import React from 'react'
import Cards from '../Components/Healthcare/Cards'
import ImageCarousal from '../Components/Home/ImageCarousal'
import Tabs from '../Components/Navbar/Tabs'


function Healthcare() {
  
  return (
    <>
    <Tabs/>
    
    <Box  width={"85%"} margin="50px auto 0 auto">
      <ImageCarousal />
    
      
    <Cards> 
    </Cards>
  </Box></>
    
    
  )
}

export default Healthcare
