import { Box, Center, Flex, Heading, Image, Radio, RadioGroup, Square, Stack, Text } from '@chakra-ui/react'
import React from 'react';

function Feature({ title, desc, ...rest }) {
    return (
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        
        
      </Box>
    )
  }
export const ExpressDelivery = () => {
  return (
    <Flex w="70%" m="auto" justifyContent="space-between"  mt="30px" mb="30px">
        <Box  w='60%'>
            <Stack spacing={8} direction='column'>
                <Flex alignItems="end" p={5} shadow='md' bg="#ecf2ff"  borderRadius="7px">
                    <Box >
                        <Heading fontSize='xl' color="#4f585e">Hey there!</Heading>
                        <Text mt={4} fontSize='xl' color="#735763">Choose Express delivery to get your order quicker!</Text>    
                    </Box>
                </Flex>
                <RadioGroup>
                    <Box p={5} shadow='md' mt={4}>
                        <Radio colorScheme='green' value='1'></Radio>
                        <Heading fontSize='xl'>Plan Money</Heading>
                        <Text mt={4}>The future can be even brighter but a goal without a plan is just a wish</Text> 
                                
                    </Box>
                    <Box p={5} shadow='md' mt={4}>
                        <Radio colorScheme='green' value='2'>
                            <Text mt={4}>The future can be even brighter but a goal without a plan is just a wish</Text>
                        </Radio>          
                    </Box>
                </RadioGroup>
            </Stack>
        </Box>
    </Flex>
  )
}
