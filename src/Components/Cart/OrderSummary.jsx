import { Accordion,AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Divider, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { TbDiscount2 } from 'react-icons/tb'


function OrderSummary() {
  return (
    <Box >
        <VStack spacing={"20px"}>
        <Accordion  allowMultiple width={"100%"} >
  <AccordionItem borderRadius="5px" border={"1px solid teal"} padding="1px">
    <h2>
      <AccordionButton >
        <Flex flex='1' textAlign='left' alignItems={"center"} color={"teal"} fontWeight="700">
        <TbDiscount2/><Text ml={"10px"}>Apply Coupon</Text> 
        </Flex>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        asdasdadadadad
      
    </AccordionPanel>
  </AccordionItem>

  
</Accordion>
            <Button width={"100%"} colorScheme={"teal"}>Proceed To Buy</Button>
            <Divider/>
            <VStack width={"100%"} >
            <Text width={"100%"} textAlign={"left"} fontWeight="500"> Order Summary</Text>
            <HStack width={"100%"} justify={"space-between"}><Text fontSize={"14px"}>Cart Value</Text><Text>₹ 500</Text></HStack>
            <HStack width={"100%"} justify={"space-between"}><Text fontSize={"14px"}>Amount to be paid</Text><Text>₹ 500</Text></HStack>
            </VStack>
            
        </VStack>
    </Box>
  )
}

export default OrderSummary