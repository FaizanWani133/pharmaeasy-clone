import { Box, Flex, HStack, Text, Wrap } from '@chakra-ui/react'
import React from 'react'
import CartProduct from '../Components/Cart/CartProduct'
import OrderSummary from '../Components/Cart/OrderSummary'

function Cart() {
  return (
    <Wrap  width="80%" margin="30px auto"  justify={"space-between"} >
        <Box flexGrow={".7"}  >
           <HStack justify={"space-between"}><Text fontSize={"26px"} fontWeight="600" mb={"15px"}>Items in Cart</Text><Text fontSize={"12px"}>Prices are indicative</Text></HStack>
            <CartProduct/>
        </Box>
        <Box width={"352px"} p={4}>
            <OrderSummary/>
        </Box>
    </Wrap>
  )
}

export default Cart