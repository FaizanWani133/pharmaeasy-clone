import { SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react'
import React from 'react'

function SearchBar() {
  return (
    
    <Box maxW={{base:"300px",sm:"600px",lg:"800px"}} margin="auto" pt="30px" pr="10px" pl="10px">
      <Box mb={4}><Text align={{base:"center",lg:"left"}} fontSize="22px" fontWeight="600">What are you looking for?</Text></Box>
      <InputGroup>
    <InputLeftElement
    
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input paddingY="20px" focusBorderColor='grey' boxShadow= "rgb(0 0 0 / 8%) 0px 4px 7px" borderRadius="20px" type='text' placeholder='Search for'  />
    <InputRightElement width='5rem' >
        <Button bg="#10847E" color="white" borderRadius="20px" height="35px" mr="3px"  >
          Search
        </Button>
      </InputRightElement>
  </InputGroup>
        
    </Box>
  )
}

export default SearchBar