import { Box,  Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {tabCards} from "../Home/TabCarousal"

function Tabs() {
  return (
    <Box width="100%" height="105px" zIndex="3" bg="#EEF4FF"  pos="fixed" top="0"  alignItems="end" display="flex">
        <Flex className='hideScroll' height="30px" paddingX="20px"  margin="0 auto" justifyContent="center" gap="30px" overflowX="scroll" overflowY="hidden">
        {tabCards.map(tab=><Box key={tab.title}><Link className='tabs'  to={tab.path}>{tab.title}</Link></Box>)}
        </Flex>
        

    </Box>
  )
}

export default Tabs