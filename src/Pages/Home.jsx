import { Box } from '@chakra-ui/react'
import React from 'react'
import TabCarousal from '../Components/Home/TabCarousal'
import SearchBar from '../Components/Navbar/SearchBar'

function Home() {
  return (
    <Box bg="radial-gradient(150px 150px at 95% 0%, rgba(253, 186, 43, 0.3) 0%, rgba(253, 186, 43, 0) 100%), radial-gradient(150px 150px at 5% 0%, rgba(120, 213, 242, 0.3) 0%, rgba(253, 186, 43, 0) 100%)">
      <SearchBar/>
      <TabCarousal/>
    </Box>
      
    
  )
}

export default Home