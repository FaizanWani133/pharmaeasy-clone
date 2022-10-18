import { Box, Button, Flex, Center, Heading, Hide, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Search() {
 const {name} = useParams();
console.log(name);

 useEffect(()=>{
  axios.get(`http://localhost:3001/Products?q=${name}`).then(res=>console.log(res))
 },[name])

  return (
    <Box display="flex" w={{base: "90%", sm:"90%", md:"90%", lg:"90%", xl:"70%"}} m="auto" justifyContent="space-between"  my="30px">
      {/* Left */}
      <Box w={{base: "90%", sm:"90%", md:"90%", lg:"60%", xl:"60%"}} display="flex" flexDirection="column">
        {/* 1 product */} 
        <Heading p={4} fontSize="25px"color="#4f585e">Showing all results for <span  fontWeight="bold">dettol</span></Heading>
        <Flex px={6} py={5} border="1px solid #a7bdd3" borderRadius="10px">
          <Box mr="20px">
            <Image mr="20px" w="50px" p="5px" src="https://cdn01.pharmeasy.in/dam/products_otc/I05057/dettol-liquid-handwash-refill-original-germ-protection-hand-wash-750-ml-2-1641787745.jpg" alt=""/>
          </Box>
          <Flex flexDirection="column" flex>
              <Heading mb="10px" fontSize={{base: "18px", sm:"18px", md:"18px", lg:"22px", xl:"22px"}} color="#4f585e">Dettol Liquid Handwash Refill - Original Germ Protection Hand Wash, 750 Ml</Heading>
              <Text mb="10px" fontWeight="" color="#8897a4">By DETTOL SKINCARE</Text>
              <Text mb="10px" color="#4f585e" fontWeight="bold">750ml Liquid in Packet</Text>
              <Flex justifyContent="space-between" flexDirection={{base:"column", sm:"column", md:"column", lg:"row", xl:"row"}}>
                <Flex>
                  <Heading mr="5px" fontSize="22px" color="#4f585e">₹103.7</Heading>
                  <Text color="#8897a4" mr="5px" mt="5px">MRP <Text as="s" mr="5px">₹109.00</Text></Text>
                  
                </Flex>
                <Button p={7} mt="10px" fontSize="22px" fontWeight="bold" borderRadius="5px" bg="#10847e" color="white" _hover={{bg:"#10847e"}}> Add to Cart</Button>
              </Flex>
          </Flex>
        </Flex>
      </Box>
      {/* Right */}
      <Hide below="lg">
        <Box w="400px" p={4}>
            <Text p={3} fontWeight="bold" fontSize="20px" color="#4f585e" >Please add item(s) to proceed</Text>
            <Button mb="20px" w="100%" bg="#959595" color="white" p={7} mt="10px" fontSize="22px" _hover={{bg:"#959595"}} >View Cart</Button>
            <Box color="#4f585e" p={4} border="1px solid #a7bdd3" borderRadius="10px" >
              <Center p={4} borderBottom="1px solid #a7bdd3">
                <Text fontWeight="bold">What is a valid prescription ?</Text>
              </Center>
              <Text my="20px">A valid prescription contains:</Text>
              <Flex mb="10px">
                <Image mr="20px" w="40px" h="40px" p="5px" src="https://cdn-icons-png.flaticon.com/512/1107/1107126.png"/>
                <Text  p={2}>Doctor Details</Text>
              </Flex>
              <Flex mb="10px">
                <Image mr="20px" w="40px" h="40px" p="5px" src="https://cdn0.iconfinder.com/data/icons/office-83/32/calendar-info-512.png"/>
                <Text  p={2}>Date of Prescription</Text>
              </Flex>
              <Flex mb="10px">
                <Image mr="20px" w="40px" h="40px" p="5px" src="https://icon-library.com/images/account-icon/account-icon-13.jpg"/>
                <Text  p={2}>Patient Details</Text>
              </Flex>
              <Flex mb="10px">
                <Image mr="20px" w="40px" h="40px" p="5px" src="https://www.viscotec.de/media/Pharma-ViscoTec-Icon.png"/>
                <Text  p={2}>Dosage Details</Text>
              </Flex>
            </Box>
        </Box>
      </Hide>
    </Box>
  )
}

export default Search