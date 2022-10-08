import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

function Navbar() {
  return (
    <Box p="20px"  borderBottom="1px solid black" position="fixed" top="0" left="0" width="100%">
        <Flex>
            <Image src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0"></Image>
        </Flex>
    </Box>
  )
}

export default Navbar