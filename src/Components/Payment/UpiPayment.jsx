import { Button, Flex, Image, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { GiHeartPlus } from 'react-icons/gi';

export function UpiPayment() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [message, setMessage] = React.useState('');
    return (
      <>
        <Flex >
            <Input w="35%"p="20px"mr="10px" type="text" id="message" name="message" value={message} onChange={event => setMessage(event.target.value)} placeholder="e.g. 99XXXXXXXX@paytm" />
            <Button disabled={!message} onClick={onOpen} bg="#10847e" color="white" fontSize='xl' p="20px" _hover={{ border: "1px solid #159a94" }}>Place Order</Button>
        </Flex>
  
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent bg="#10847e">
            <ModalHeader color="white" >Order Status</ModalHeader>
            <ModalBody textAlign="centre" color="white">
                <GiHeartPlus  />
                <Image />
                Order confirmed succesfully 
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Home
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }