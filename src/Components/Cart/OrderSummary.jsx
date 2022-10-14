import { Box, Button, Divider, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function OrderSummary() {
  return (
    <Box>
        <VStack>
            <Button width="100%">Apply Coupon</Button>
            <Button>Proceed To Buy</Button>
            <Divider/>
            <Text> Order Summary</Text>
            <HStack width={"100%"} justify={"space-between"}><Text>Cart Value</Text><Text>$ 500</Text></HStack>
            <HStack width={"100%"} justify={"space-between"}><Text>Amount to be paid</Text><Text>$ 500</Text></HStack>
        </VStack>
    </Box>
  )
}

export default OrderSummary