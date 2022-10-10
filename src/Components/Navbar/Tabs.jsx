import { Box,  Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {tabCards} from "../Home/TabCarousal"

function Tabs() {
  return (
    <Box width="100%" height="105px" zIndex="3" bg="#EEF4FF"  pos="fixed" top="0" left="0" alignItems="end" display="flex">
        <Flex className='hideScroll' height="30px" paddingX="20px" width="fit-content" margin="0 auto" justifyContent="center" gap="20px" overflowX="scroll" overflowY="hidden">
        {tabCards.map(tab=><Link className='tabs' key={tab.title} to={tab.path}>{tab.title}</Link>)}
        </Flex>
        

    </Box>
  )
}

export default Tabs