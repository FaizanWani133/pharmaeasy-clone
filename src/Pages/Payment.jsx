import { Box, Button, Flex, Heading, Image, Radio, RadioGroup, Stack, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import React from 'react';

export const Payment = () => {
  return (
    <Flex w="70%" m="auto" justifyContent="space-between"  mt="30px" mb="30px" flexDirection={{xl: "row", xs:"column", sm:"column", md:"column", lg:"row"}}>
        <Box  w={{xl: "70%", xs:"100%", sm:"100%", md:"100%", lg:"60%"}} border="1px solid black">
            <Box>
                <Heading w='100%'  p="10px" color="#8897a2">Offers</Heading>
               
                    <Flex>
                        <Image w="65px" p="10px" src="https://cdn.pharmeasy.in/payments/wallet_icons/paytm.png" alt="logo"/>
                        <Flex flexDirection="row">
                            <Heading  p="10px" color="#8897a2" > Paytm Wallet </Heading>
                            <Radio value='1' ></Radio>
                        </Flex>
                        <Text>Minimumof Rs.15 cashback upto Rs.300. Valid once per user & on orders above Rs.599</Text>
                    </Flex>
               
            </Box>
            <Box>
                <Heading w='100%'  p="10px" color="#8897a2">Other Options</Heading>
            </Box>
        </Box>
        <Box display={{xl:"block",xs:"none", sm:"none", md:"none", lg:"none"}} border="1px solid black">
           <Heading w='100%' fontSize='xl' p="10px" color="#8897a2" > Price Breakdown </Heading>
            <Box >
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
