import { Box, Button, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import QuantitySelecter from './QuantitySelecter'

function CartProduct({data}) {
  return (
    <Flex p={4} gap="20px">
        <Box><Image bg="blue" width="60px" height="60px"></Image></Box>
        <Box flexGrow={"1"}>
            <HStack alignItems={"flex-start"} justify={"space-between"}><Text>asdadaddadadad asdadaddadadad asdadaddadadad</Text><Button>X</Button></HStack>
            <Text>BY Dettol</Text>
            <Text>50g lotion tube</Text>
            <HStack justify={"space-between"}><QuantitySelecter/><VStack><Text>54030%</Text><Text>542</Text></VStack></HStack>
        </Box>



    </Flex>
  )
}

export default CartProduct