import { Button, Center, Flex,Text, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'
import { GiHeartPlus } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../Redux/Cart/action';

export function Order() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    let navigate = useNavigate(); 
    const dispatch = useDispatch();

    const handleClick = () => {
      dispatch(clearCart());
        let path = `/`; 
        navigate(path);
      
      


        

    }
    return (
      <>
        <Button onClick={onOpen} bg="#10847e" color="white" fontSize='xl' p="25px" _hover={{ border: "1px solid #159a94" }}>Place Order</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnOverlayClick={false}>
          <ModalOverlay />
          <ModalContent bg="#10847e">
            <ModalHeader color="white" > 
                <Flex justifyContent="space-between">
                    <Text>Order Status</Text>
                    <Image h="22%" src="https://assets.pharmeasy.in/web-assets/dist/1fe1322a.svg" alt="logo"/> 
                </Flex>
            </ModalHeader>
            <ModalBody alignItems="centre" color="white" >
                <Center>
                    <Flex flexDirection="column">
                        <Center><GiHeartPlus fontSize="50px" /></Center>
                        <Image />
                        <Text fontSize="20px"> Order has been placed succesfully </Text>                        
                    </Flex>
                </Center>
            </ModalBody>
            <ModalFooter>
              <Button bg='white' color="#10847e" mr="120px" onClick={ ()=> {
                    onClose();
                    handleClick();
                }}>
                   Back to Home
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }