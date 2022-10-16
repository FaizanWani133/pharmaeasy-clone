import { Box, Button, Flex, Heading, Image, Radio, RadioGroup, Stack, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import React from 'react';
import { AiFillRightCircle } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
export const Delivery = () => {
  return (
    <Flex w="70%" m="auto" justifyContent="space-between"  mt="30px" mb="30px" flexDirection={{xl: "row", xs:"column", sm:"column", md:"column", lg:"row"}}>
        <Box  w={{xl: "60%", xs:"100%", sm:"100%", md:"100%", lg:"60%"}}>
            <Stack spacing={8} direction='column'>
                <Flex alignItems="end" p={5} shadow='md' bg="#ecf2ff"  borderRadius="7px">
                    <Box >
                        <Heading fontSize='xl' color="#4f585e">Hey there!</Heading>
                        <Text mt={4} fontSize='xl' color="#889dad">Choose Express delivery to get your order quicker!</Text>    
                    </Box>
                </Flex>
                <RadioGroup defaultValue='1'>
                    <Box p={5} borderRadius="7px" mt={4} _hover={{ border: "1px solid #159a94" }} >
                        <Flex>
                            <Radio colorScheme='green' value='1'></Radio>
                            <Box ml='20px'>
                                <Heading fontSize='xl' color="#4f585e">Tommorrow, before 10:00 pm </Heading>
                                <Flex mt="6px">
                                    <Image src="https://assets.pharmeasy.in/apothecary/images/ic_express%20delivery.svg?dim=16x0" />
                                    <Text fontSize="13px" > Express Delivery | ₹ 0 </Text>  
                                </Flex>
                                
                           </Box>
                        </Flex>         
                    </Box>
                </RadioGroup>
            </Stack>
        </Box>
        <Box w={{xl: "30%", xs:"100%", sm:"100%", md:"100%", lg:"30%"}}>
           <NavLink to="/payment"> <Button w='100%' display="flex"  bg="#10847e" color="white" fontSize='xl' p="25px" _hover={{ border: "1px solid #159a94" }} ><Text mr="10px"> Proceed to Pay </Text> <AiFillRightCircle w="50px"/></Button></NavLink>
            <Box display={{xl:"block",xs:"none", sm:"none", md:"none", lg:"none"}}>
                <Heading fontSize='xl' color="#889dad" p="10px" >Order Summary</Heading>
                <Flex justifyContent="space-between" p="10px">
                    <Text fontSize='l' color="#4f585e">Cart Value</Text>
                    <Flex>
                        <Heading fontSize='l' as="s" color="#8897a2">₹ 465.00</Heading>
                        <Heading fontSize='l' color="#4f585e">₹ 385.95 </Heading> 
                    </Flex>
                </Flex>
                <Flex justifyContent="space-between" p="10px">
                    <Text fontSize='l' color="#4f585e">Delivery charges</Text>
                    <Flex>
                        <Heading fontSize='l' as="s" color="#8897a2" mr="5px">₹ 99.00</Heading>
                        <Heading fontSize='l' color="#4f585e">₹ 75.00 </Heading> 
                    </Flex>
                </Flex>
                <Flex justifyContent="space-between" p="10px">
                    <Text fontSize='l' color="#4f585e">Cart Value</Text>
                    <Heading fontSize='l' color="#4f585e">₹ 460.95 </Heading> 
                    
                </Flex>   
                <Accordion defaultIndex={[0]} allowMultiple border="2px dotted #3bb896" borderRadius="7px" bg="#f2fff8" p={3} mt="20px">
                    <AccordionItem border="1px solid #f2fff8">
                        <h2>
                        <AccordionButton _hover={{ bg:"#f2fff8" }}>
                            <Box flex='1' textAlign='left' justifyContent="space-around" w="100%">
                                <Flex justifyContent="space-between" color="#3bb896">
                                    <Image w="20px" pr={1} src="https://cdn-icons-png.flaticon.com/512/1490/1490817.png" alt="icon" />
                                    Total savings of <span> ₹ 103.5 </span> on this order         
                                </Flex>
                            </Box>
                            <AccordionIcon color="#3bb896" />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Flex justifyContent="space-between" color="#3bb896">
                                <Text fontSize='xs'> MRP. Discount 17.00%</Text>
                                <Text fontSize='xs'>₹ 79.5</Text>
                            </Flex>
                            <Flex justifyContent="space-between" color="#3bb896">
                                    <Text fontSize='xs'> Delivery Charges Waiver</Text>
                                    <Text fontSize='xs'>₹ 24.00</Text>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
            
        </Box>
    </Flex>
  )
}
