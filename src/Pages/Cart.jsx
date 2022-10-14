import { Box, Flex, Wrap } from '@chakra-ui/react'
import React from 'react'
import CartProduct from '../Components/Cart/CartProduct'
import OrderSummary from '../Components/Cart/OrderSummary'

function Cart() {
  return (
    <Wrap border={"1px"} width="90%" margin="0 auto"  >
        <Box flexGrow={"1"} border={"2px"} >
            <CartProduct/>
        </Box>
        <Box width={"352px"} p={4}>
            <OrderSummary/>
        </Box>
    </Wrap>
  )
}

export default Cart