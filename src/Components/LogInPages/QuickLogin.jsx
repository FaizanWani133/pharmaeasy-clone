import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, FormLabel, Image, Input, Stack, useDisclosure, InputGroup, InputRightElement, Text, useToast } from "@chakra-ui/react"
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getSuccess } from '../../Redux/Auth/action';
import { LogOut } from "./LogOut";

const initState ={
  email:"",
  password:"",
}

export function LoginIndividualSlider() {

    const auth = localStorage.getItem("isAuth");
    
    const toast= useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const firstField = useRef();

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const [user, setUser] = useState(initState);

    const {isAuth} = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleChange = (e) =>{
        const {name, value } = e.target;
        setUser({...user, [name]: value})

    }
    console.log(user);
  
    const handleLogin = async() =>{
        let res = await fetch(`http://localhost:3001/Users`);
        let res2 = await res.json();
        // console.log(res2);

        let flag = false;
        res2.map((elem) => {
            if(elem.email  === user.email  && elem.password  === user.password){
                flag = true;
            }
        })

        try {
          if(initState.name && initState.email && initState.password){
              if(flag){
                dispatch(getSuccess(true));
                localStorage.setItem("isAuth", true);
                toast({
                  title: 'User Logged in Successfully',
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                });
              }
              else{
                toast({
                  title: 'Wrong Credentials!!',
                  status: 'success',
                  duration: 3000,
                  isClosable: true,
                });
              }
          }
          else{
            toast({
                title: 'Fill in the details',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
          }  
        } 
        catch (error) {
            console.log(error);   
        }
        console.log(isAuth);
        
        setUser(initState)
        onClose();
    }

    console.log(auth);
    return (
      <>
       {auth ? <Text > <LogOut /> </Text> : <Text onClick={onOpen} color="black" cursor="pointer"  >Hello, Log in </Text>}
        <Drawer
          isOpen={isOpen}
          placement='right'
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
            fontSize="14px"/>
            <DrawerHeader 
                borderBottomWidth='1px'
                bg="#0f847e"
                minH="110px"
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
              <Stack spacing='20px'>
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
                        type="email"
                        pattern="[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
                        letterSpacing=".2px"
                        outline=".1px solid black"
                        focusBorderColor="none"
                        placeholder="Enter your Email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />

                    <InputGroup h="2.8rem">
                        <Input
                        h="2.8rem"
                        letterSpacing=".2px"
                        outline=".1px solid black"
                        focusBorderColor="none"
                        type={show ? "text" : "password"}
                        placeholder="Enter password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        
                        />
                        <InputRightElement width="4.5rem">
                        <Button h="2rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                        </InputRightElement>
                    </InputGroup>
                    
                    </Stack>
                </Box>
                <Button 
                    h="2.8rem"
                    variant="#0f847e"
                    bg="#0f847e"
                    color="#fff"
                    _hover={{ bg: "#159a94" }}
                    onClick={handleLogin}
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
      </>
    )
  }