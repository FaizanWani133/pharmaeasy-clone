import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"

export function LogOut() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleLogOut = () =>{
        console.log("LogOut Called");
        localStorage.clear();
    }
    
    return (
      <>
        <Text color="black" onClick={onOpen}>User</Text>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              Are you sure you want to LOGOUT ?
            </ModalBody>
            <ModalFooter>
              <Button onClick={handleLogOut }>Log Out</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }