
import {
  Button,
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  useDisclosure,
  Center,
  Divider,
  Text,
  Avatar,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { TbDiscount2 } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { RiMenuFoldFill,} from "react-icons/ri";

import { Link, useNavigate } from "react-router-dom";


function Navbar() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
    };
  }, []);
  return (
    <Box
      p="12px 40px 10px 40px"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      boxShadow="rgb(0 0 0 / 12%) 0px -1px 0px inset"
      display="flex"
      justifyContent="space-between"
      height="65px"
    >
      <Flex>
        {windowWidth < 1024 && (
          <Box w="30px" display="flex" alignItems="center">
            <RiMenuFoldFill fontSize="20px" className="menuHover" onClick={onOpen} />
          </Box>
        )}
        {windowWidth < 1024 && (
          <Box margin="auto">
            <Image
              _hover={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
              src="https://assets.pharmeasy.in/apothecary/images/logo_small.svg?dim=128x0"
            ></Image>
          </Box>
        )}
        {windowWidth > 1024 && (
          <Box>
            <Image
              _hover={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
              src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0"
            ></Image>
          </Box>
        )}
        {windowWidth > 1024 && (
          <Center pl="30px" pr="30px">
            <Divider orientation="vertical" />
          </Center>
        )}
        {windowWidth > 1024 && (
          <Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Image src="https://assets.pharmeasy.in/apothecary/images/ic_express%20delivery.svg?dim=16x0" />
              </Box>
              <Box>
                <Text fontSize="13px"> Express delivery to</Text>
              </Box>
            </Box>

            <Text fontSize="14px" fontWeight="600">
              400001 Mumbai ▼
            </Text>
          </Box>
        )}
      </Flex>
      <Flex align="center" justifyContent="end" width="50%" gap="20px">
        {windowWidth > 1024 && (
          <Box>
            <Button
              leftIcon={<HiOutlineDeviceMobile fontSize="25px" />}
              colorScheme="gray"
              variant="solid"
              fontWeight="normal"
            >
              Download App
            </Button>
          </Box>
        )}
        {windowWidth > 1024 && (
          <Link className="hover_green">
            <Box display="flex" fontSize="14px">
              <Box display="flex" alignItems="center" mr="10px">
                <AiOutlineUser fontSize="20px" />
              </Box>
              {windowWidth > 1104 && <Box mt="2px" fontWeight="600">Hello, Log in</Box>}
            </Box>
          </Link>
        )}
        <Link className="hover_green">
          <Box display="flex" fontSize="14px">
            <Box display="flex" alignItems="center" mr="5px">
              <TbDiscount2  fontSize="20px" />
            </Box>
            {windowWidth > 1104 && <Box mt="2px" fontWeight="600">Offers</Box>}
            {windowWidth < 1024 && windowWidth > 650 && <Box mt="2px" fontWeight="600" >Offers</Box>}
          </Box>
        </Link>
        <Link className="hover_green">
          <Box display="flex" fontSize="14px">
            <Box display="flex" alignItems="center" mr="8px">
              <FiShoppingCart fontSize="20px" />
            </Box>
            {windowWidth > 1104 && <Box mt="2px" fontWeight="600">Cart</Box>}
            {windowWidth < 1024 && windowWidth > 650 && <Box fontWeight="600" mt="2px">Cart</Box>}
          </Box>
        </Link>
      </Flex>

      {/* left side menu DrawerContent */}

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth="1px"
            bg="linear-gradient(106.34deg, rgb(112, 179, 171) 0%, rgb(54, 119, 114) 96.21%)"
            
          >
            <Box display="flex">
              <Box display="flex" alignItems="center">
              <Avatar  bg="white" icon={<AiOutlineUser color="#10847E" fontSize='1.5rem' />} />
              </Box>
              <Box fontSize="13px" ml="15px" display="flex" flexDir="column" justifyContent="space-between" color="white">
                <Box fontSize="15px">Hi, there !</Box>
                <Box>Log In / Sign Up</Box>
              </Box>

            </Box>
          
          </DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbar;
