import React from 'react';
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, FormLabel, Image, Input, Stack, useDisclosure, InputGroup, InputRightElement, Text } from "@chakra-ui/react";

export const LoginSlider = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const firstField = React.useRef();

    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
  return (
    <div>
        <Center>
            <Button
            w="100%"
            h="2.8rem"
            variant="#0f847e"
            bg="#0f847e"
            color="#fff"
            _hover={{ bg: "#159a94" }}
            onClick={handleOpen}
            >
            Continue
            </Button>
        </Center>
        {/* </Button> */}
        <Drawer
            isOpen={isOpen}
            placement="right"
            initialFocusRef={firstField}
            onClose={onClose}
            position="relative"
            size={"sm"}
        >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton
                position="absolute"
                left="-50px"
                top="25px"
                bg="#0f847e"
                p="28px"
                borderRadius="0"
                color="white"
                _hover={{ bg: "#0f847e" }}
                _active={{ bg: "#0f847e" }}
                fontSize="14px"
            />
            <DrawerHeader
                borderBottomWidth="1px"
                bg="#0f847e"
                minH="110px"
                // border="1px solid red"
                align="end"
                py="0"
                px="40px"
            >
                <Flex justify="space-between" h="100%" w="100%">
                <Flex
                    h="80%"
                    w="50%"
                    // border="1px solid red"
                    justify="center"
                    // py="10px"
                    align="end"
                >
                    <Image
                    h="62%"
                    src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
                    />
                </Flex>
                <Flex
                    align="end"
                    w="50%"
                    h="100%"
                    // border="1px solid red"
                    justify="end"
                >
                    <Image
                    h="75%"
                    src="https://assets.pharmeasy.in/web-assets/dist/1fe1322a.svg"
                    />
                </Flex>
                </Flex>
            </DrawerHeader>

            <DrawerBody px="50px">
                <Stack spacing="20px">
                <Box>
                    <FormLabel
                    htmlFor="phone"
                    fontWeight="700"
                    py="12px"
                    color="#4f585e"
                    >
                    Quick Login
                    </FormLabel>
                    <Stack spacing="20px">
                    <Input
                        h="2.8rem"
                        ref={firstField}
                        // id="email"
                        type="email"
                        pattern="[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
                        letterSpacing=".2px"
                        outline=".1px solid black"
                        focusBorderColor="none"
                        placeholder="Enter your Email"
                        
                    />

                    <InputGroup h="2.8rem">
                        <Input
                        h="2.8rem"
                        letterSpacing=".2px"
                        outline=".1px solid black"
                        focusBorderColor="none"
                        type={show ? "text" : "password"}
                        placeholder="Enter password"
                       
                        />
                        <InputRightElement width="4.5rem">
                        <Button h="2rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Input
                        h="2.8rem"
                        letterSpacing=".2px"
                        outline=".1px solid black"
                        focusBorderColor="none"
                        type={"password"}
                        placeholder="Re-enter password"
                        
                    />
                    </Stack>
                </Box>
                <Button
                    h="2.8rem"
                    variant="#0f847e"
                    bg="#0f847e"
                    color="#fff"
                    _hover={{ bg: "#159a94" }}
                    
                >
                    Login
                </Button>
                </Stack>
                <Text fontSize="12px" color="#4f585e" py="20px">
                By clicking continue, you agree with our{" "}
                <span style={{ color: "#159a94", cursor: "pointer" }}>
                    {" "}
                    Privacy Policy
                </span>
                </Text>
            </DrawerBody>
            </DrawerContent>
        </Drawer>
    </div>
  )
}
