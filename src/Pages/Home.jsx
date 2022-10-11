import { Box } from '@chakra-ui/react'
import React from 'react'
import TabCarousal from '../Components/Home/TabCarousal'
import SearchBar from '../Components/Home/SearchBar'
import CategoryCraousal from '../Components/Home/CategoryCraousal'
import Banner from '../Components/Home/Banner'


function Home() {
  return (
    <Box bg="radial-gradient(150px 150px at 95% 0%, rgba(253, 186, 43, 0.3) 0%, rgba(253, 186, 43, 0) 100%), radial-gradient(150px 150px at 5% 0%, rgba(120, 213, 242, 0.3) 0%, rgba(253, 186, 43, 0) 100%)">
      <SearchBar/>
      <TabCarousal/>
      <CategoryCraousal/>
      <Banner/>
      
    </Box>
      
    
  )
}

export default Home