import { Accordion,AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Divider, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { TbDiscount2 } from 'react-icons/tb'
import { useSelector,useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { getCartTotal } from '../../Redux/Cart/action'


function OrderSummary() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {cartItems,totalAmount} = useSelector(state => state.cart)
    
    useEffect(()=>{
        dispatch(getCartTotal())
    },[cartItems])
  return (
    <Box >
        <VStack spacing={"20px"}>
        <Accordion  allowMultiple width={"100%"} >
  <AccordionItem   borderRadius="5px" border={"1px solid teal"} padding="1px">
    <h2>
      <AccordionButton disabled={cartItems.length < 1}  >
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
            <Button disabled={cartItems.length < 1 } width={"100%"} onClick={()=>navigate("/payment")} colorScheme={"teal"}>Proceed To Buy</Button>
            <Divider/>
            <VStack width={"100%"} >
            <Text width={"100%"} textAlign={"left"} fontWeight="500"> Order Summary</Text>
            <HStack width={"100%"} justify={"space-between"}><Text fontSize={"14px"}>Cart Value</Text>{}<Text>₹ {totalAmount}</Text></HStack>
            <HStack width={"100%"} justify={"space-between"}><Text fontSize={"14px"}>Amount to be paid</Text><Text>₹ {totalAmount}</Text></HStack>
            </VStack>
            
        </VStack>
    </Box>
  )
}

export default OrderSummary