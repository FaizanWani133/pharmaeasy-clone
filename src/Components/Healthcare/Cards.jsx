import { Box, Flex, HStack, Image, Text, Wrap } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {categories} from '../Home/CategoryCraousal'
function Cards() {

  return (
    <Wrap padding={"10px"} gap="20px" justifyContent={"center"}>
      {categories.map(tab =><Link>
      <HStack w={"350px"} border="0.5px solid rgba(0,0,0,0.2)" borderRadius={"10px"} padding={"10px"} _hover={{boxShadow:"0 0 5px 2px #16876e",border:"transparant"}}><Image w={"100px"} src={tab.image}></Image>
      <Text>{tab.title} </Text>
        </HStack>
        </Link>)}  
         </Wrap>
    
  )
}

export default Cards