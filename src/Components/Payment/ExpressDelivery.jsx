import { Box, Button, Flex, Heading, Image, Radio, RadioGroup, Stack, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Hide } from '@chakra-ui/react'
import React from 'react';
import { AiFillRightCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
export const Delivery = () => {

    const { totalAmount,totalOriginalAmount } = useSelector((state) => state.cart);

  return (
    <Box display="flex" w={{base: "90%", sm:"90%", md:"90%", lg:"90%", xl:"70%"}} m="auto" justifyContent="space-between"  mt="30px" mb="30px" flexDirection={{base: "column", sm:"column", md:"column", lg:"column", xl:"row"}}>
        {/* Left */}
        <Box  w={{base: "90%", sm:"90%", md:"90%", lg:"90%", xl:"60%"}} mr="20px">
            <Stack spacing={8} direction='column'>
                <Flex alignItems="end" p={5} shadow='md' bg="#ecf2ff"  borderRadius="7px">
                    <Box >
                        <Heading fontSize='xl' color="#4f585e">Hey there!</Heading>
                        <Text mt={4} fontSize='xl' color="#889dad">Choose Express delivery to get your order quicker!</Text>    
                    </Box>
                </Flex>
                <RadioGroup defaultValue='1'>
                    <Box p={5} borderRadius="7px" mt={4} _hover={{ border: "1px solid #159a94" }} border="1px solid #e4e7ea">
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
                    <Box p={5} borderRadius="7px" mt={4} _hover={{ border: "1px solid #159a94" }} border="1px solid #e4e7ea" >
                        <Flex>
                            <Radio colorScheme='green' value='2'></Radio>
                            <Box ml='20px'>
                                <Heading fontSize='xl' color="#4f585e">20 Oct - 22 Oct</Heading>
                           </Box>
                        </Flex>         
                    </Box>
                </RadioGroup>
                
            </Stack>
        </Box>
        {/* Right */}
        <Box w={{base: "90%", sm:"90%", md:"90%", lg:"90%", xl:"30%"}} mt={{base: "20px", sm:"20px", md:"20px", lg:"20px", xl:"1px"}} >
           <NavLink to="/payment"> <Button w='100%' display="flex"  bg="#10847e" color="white" fontSize='xl' p="25px" _hover={{ border: "1px solid #159a94" }} ><Text mr="10px"> Proceed to Pay </Text> <AiFillRightCircle w="50px"/></Button></NavLink>
            <Hide below='lg'>
                <Box>
                    <Heading fontSize='xl' color="#889dad" p="10px" >Order Summary</Heading>
                    <Flex justifyContent="space-between" p="10px">
                        <Text fontSize='l' color="#4f585e">Cart Value</Text>
                        <Flex>
                            <Heading fontSize='l' as="s" color="#8897a2" mr="5px">₹{totalOriginalAmount}</Heading>
                            <Heading fontSize='l' color="#4f585e">₹{totalAmount}</Heading> 
                        </Flex>
                    </Flex>
                    <Flex justifyContent="space-between" p="10px">
                        <Text fontSize='l' color="#4f585e">Delivery charges</Text>
                        <Flex>
                            <Heading fontSize='l' as="s" color="#8897a2" mr="5px">₹99.00</Heading>
                            <Heading fontSize='l' color="#4f585e">₹75.00 </Heading> 
                        </Flex>
                    </Flex>
                    <Flex justifyContent="space-between" p="10px" borderTop="2px dotted #e4e7ea" borderBottom="2px dotted #e4e7ea">
                        <Text fontSize='l' color="#4f585e">Cart Value</Text>
                        <Heading fontSize='l' color="#4f585e">₹{totalAmount+75}</Heading> 
                        
                    </Flex>   
                    <Accordion defaultIndex={[0]} allowMultiple border="2px dotted #3bb896" borderRadius="7px" bg="#f2fff8" p={2} mt="20px" >
                        <AccordionItem border="1px solid #f2fff8">
                            <h2>
                            <AccordionButton _hover={{ bg:"#f2fff8" }}>
                                <Box flex='1' textAlign='left' justifyContent="space-around" w="100%">
                                    <Flex color="#3bb896" flexDirection={{base: "row", sm:"row", md:"row", lg:"row", xl:"row"}}>
                                        <Image w="20px" pr={1} src="https://cdn-icons-png.flaticon.com/512/1490/1490817.png" alt="icon" />
                                        Total savings of <Text fontWeight="bold" mr="5px" ml="5px"> ₹{totalOriginalAmount-totalAmount} </Text> on this order         
                                    </Flex>
                                </Box>
                                <AccordionIcon color="#3bb896" />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Flex justifyContent="space-between" color="#3bb896">
                                    <Text fontSize='xs'> MRP. Discount 17.00%</Text>
                                    <Text fontSize='xs'>₹79.5</Text>
                                </Flex>
                                <Flex justifyContent="space-between" color="#3bb896">
                                        <Text fontSize='xs'> Delivery Charges Waiver</Text>
                                        <Text fontSize='xs'>₹24.00</Text>
                                </Flex>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Hide>
            
        </Box>
    </Box>
  )
}
