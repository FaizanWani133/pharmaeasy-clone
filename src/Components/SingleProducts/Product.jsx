import { Box, Button, Flex, Grid, GridItem, Heading, Img, Text, useDisclosure } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Share from "../../BannerImages/share.svg";
import Star from "../../BannerImages/star.png";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';
  import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react';
import TabCarousal from "../Home/TabCarousal";
import { ChevronDownIcon } from "@chakra-ui/icons";
import SingleProductBreadCumb from "./SingleProductBreadCumb";


const Product = (props) => {
    const {data} = props;
    const ref = useRef();
    const [modalpos,setmodalpos] = useState(true);
    const [cartCount,setCartCount] = useState({});

    // for scrolling on button press code
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')
    const btnRef = React.useRef(null)
    return (
        <Box fontFamily="'Open Sans',sans-serif">
        <Box m="50px 0 50px 15px">
            <SingleProductBreadCumb title={data.desc}/>
        </Box>
        <Flex m="50px 15px" justifyContent="space-between" flexDirection={{base:"column",md:"column",lg:"row"}}>
            <Box className="left" width={{base:"100%",md:"100%",lg:"65%"}}>
                <Flex flexDirection={{base:"column",md:"column",lg:"row"}}>
                    <Box className="imagebox" mr={{base:"0px",md:"0px",lg:"15px"}} m={{base:"0px",md:"auto"}}>
                        <Box className="image" p={{base:"15px 0px",md:"15px 0px",lg:"15px 30px 15px 30px"}} border="1px solid #cecece" borderRadius="10px">
                            <Box position ="realtive" width={{base:"100%",md:"300px",lg:"250px"}} height="250px">
                                <Img src={data.img1} ref={ref} alt={data.id} width="100%" height="100%"/>
                            <Box bgColor="white" position="absolute" top="420px" left="260px" width="30px" height="30px"borderRadius="50%" boxShadow ="0 0 10px #cecece" p="5px">
                                <Img src={Share} alt="Share" width="100%" height="100%"/>
                            </Box>
                            </Box>
                            
                        </Box>
                        <Grid gridTemplateColumns="repeat(4,1fr)" gap={3} mt={3}>
                            <GridItem border="1px solid #cecece" height="65px" borderRadius="10px" p="3px">
                                <Img src={data.img2} alt="" width="100%" height="100%" borderRadius="10px" onClick={()=>ref.current.src=data.img2}></Img>
                            </GridItem>
                            <GridItem border="1px solid #cecece" height="65px" borderRadius="10px" p="3px">
                                <Img src={data.img3} alt="" width="100%" height="100%" borderRadius="10px" onClick={()=>ref.current.src=data.img3}></Img>
                            </GridItem>
                            <GridItem border="1px solid #cecece" height="65px" borderRadius="10px" p="3px">
                                <Img src={data.img4} alt="" width="100%" height="100%" borderRadius="10px" onClick={()=>ref.current.src=data.img4}></Img>
                            </GridItem>
                            <GridItem border="1px solid #cecece" height="65px" borderRadius="10px" p="3px">
                                <Img src={data.img5} alt="" width="100%" height="100%" borderRadius="10px" onClick={()=>ref.current.src=data.img5}></Img>
                            </GridItem>
                            <GridItem border="1px solid #cecece" height="65px" borderRadius="10px" p="3px">
                                <Img src={data.img1} alt="" width="100%" height="100%" borderRadius="10px" onClick={()=>ref.current.src=data.img1}></Img>
                            </GridItem>
                       </Grid> 
                        
                    </Box>
                    <Box className="contentbox" p={{sm:"0px",md:"0px",lg:"0px 25px"}} m={{base:"20px 0px"}}>
                      <Heading fontSize={{base:"18px",md:"22px",lg:"25px"}} color="#4F585E" mb={2}>{data.desc}</Heading>
                      <Link><Text color="#10847E" mb={2}>Visit {data.company} store</Text></Link>
                      <Flex gap={5} mb={3} >
                        <Box>
                            <Flex gap={1}>
                                <Box w="25px" h="23px">
                                    <Img src={Star} w="100%" height="100%"></Img>
                                </Box>
                                <Box w="25px" h="23px">
                                    <Img src={Star} w="100%" height="100%"></Img>
                                </Box>
                                <Box w="25px" h="23px">
                                    <Img src={Star} w="100%" height="100%"></Img>
                                </Box>
                                <Box w="25px" h="23px">
                                    <Img src={Star} w="100%" height="100%"></Img>
                                </Box>
                                <Box w="25px" h="23px">
                                    <Img src={Star} w="100%" height="100%"></Img>
                                </Box>
                            </Flex>
                        </Box>
                        <Box>
                            <Text color="gray">( {data.ratings} ratings )</Text>
                        </Box>
                      </Flex>
                      <Flex justifyContent="space-between">
                        <Flex alignItems="flex-end">
                            <Text mr="10px" fontSize = "20px" fontWeight="600"> ₹{data.originalPrice}</Text>
                            <Text>MRP </Text>
                            <Text  mr="10px" fontSize = "14px" as="del"> ₹{data.newPrice}</Text>
                            <Text fontSize = {{base:"8px",md:"10px",lg:"12px"}} bgColor="pink.300" p= {{base:"5px 8px",md:"5px 15px",lg:"5px 20px"}} color="white" as="b">{data.offer}% OFF</Text>
                        </Flex>
                        <Box>
                            
                        <Menu>
                            <MenuButton as="button">
                            <Button ref={btnRef} onClick={()=>{onOpen();setmodalpos(false);}} size={{base:"sm",md:"md",lg:"lg"}} bgColor="#10847E" color="white" as="b">
                                {cartCount[data.id]?<Text>{`Qty ${cartCount[data.id]}`}<ChevronDownIcon ml={2}/></Text>:"Add To Cart"}
                            </Button>
                            </MenuButton>
                            <MenuList height="200px" overflowY="scroll" cursor="pointer" fontSize="16px">
                            <MenuItem p="6px 16px" fontSize="20px" fontWeight="600" onClick={()=>{onClose();setCartCount({});}}>Remove Item</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:1});}}>1</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:2});}}>2</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:3});}}>3</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:4});}}>4</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:5});}}>5</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:6});}}>6</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:7});}}>7</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:8});}}>8</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:9});}}>9</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:10});}}>10</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:11});}}>11</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:12});}}>12</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:13});}}>13</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:14});}}>14</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:15});}}>15</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:16});}}>16</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:17});}}>17</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:18});}}>18</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:19});}}>19</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} ><Flex alignItems="center" gap={2} onClick={()=>{onClose();setCartCount({[data.id]:20});}}>
                                        <Text>
                                            20 
                                        </Text>
                                        <Text fontSize="12px">Max Qty</Text>
                                    </Flex>
                                    </MenuItem>
                            </MenuList>
                            </Menu>
                           
                        </Box>
                        
                      </Flex>
                      <Text color="gray" fontSize="10px">Inclusive of all taxes</Text>
                      <Text  color="#4F585E" fontSize="12px" fontWeight="600" >Delivery by Tomorrow, before 10:00 pm</Text>
                    </Box>
                </Flex>
            </Box>
            
            <Box className="right" w={{base:"100%",md:"100%",lg:"30%"}} >
                <Box padding="15px" border="1px solid #4F585E" borderRadius="10px" mb="20px">
                    <Heading fontSize="20px" color="#4F585E" mb={2} textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">
                        {data.desc}
                    </Heading>
                    <Flex justifyContent="space-between">
                        <Flex alignItems="flex-end">
                            <Text mr="10px" fontSize = "18px" fontWeight="600"> ₹{data.originalPrice}</Text>
                            <Text fontSize="14px">MRP </Text>
                            <Text  mr="10px" fontSize = "12px" as="del"> ₹{data.newPrice}</Text>
                            <Text fontSize = "12px" bgColor="pink.300" p="5px 15px" color="white" as="b">{data.offer}% OFF</Text>
                        </Flex>
                        <Box>
                        <Menu>
                            <MenuButton as="button">
                            <Button ref={btnRef} onClick={()=>{onOpen();setmodalpos(false);}} size={{base:"sm",md:"md",lg:"lg"}} bgColor="#10847E" color="white" as="b">
                                {cartCount[data.id]?<Text>{`Qty ${cartCount[data.id]}`}<ChevronDownIcon ml={2}/></Text>:"Add"}
                            </Button>
                            </MenuButton>
                            <MenuList height="200px" overflowY="scroll" cursor="pointer" fontSize="16px">
                            <MenuItem p="6px 16px" fontSize="20px" fontWeight="600" onClick={()=>{onClose();setCartCount({});}}>Remove Item</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:1});}}>1</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:2});}}>2</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:3});}}>3</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:4});}}>4</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:5});}}>5</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:6});}}>6</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:7});}}>7</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:8});}}>8</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:9});}}>9</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:10});}}>10</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:11});}}>11</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:12});}}>12</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:13});}}>13</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:14});}}>14</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:15});}}>15</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:16});}}>16</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:17});}}>17</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:18});}}>18</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} p="6px 16px" onClick={()=>{onClose();setCartCount({[data.id]:19});}}>19</MenuItem>
                                    <MenuItem _hover={{bgColor:'teal.100'}} ><Flex alignItems="center" gap={2} onClick={()=>{onClose();setCartCount({[data.id]:20});}}>
                                        <Text>
                                            20 
                                        </Text>
                                        <Text fontSize="12px">Max Qty</Text>
                                    </Flex>
                                    </MenuItem>
                            </MenuList>
                            </Menu>
                        </Box>
                    </Flex>
                    
                </Box>
                <Text mb="20px">Please add item(s) to proceed</Text>
                <Button w="100%" size="lg" bgColor="#4F585E" color="white" as="b">View Cart &gt;</Button>
            </Box>
        </Flex>
        <hr/>
        <Box m="20px 15px">
            <Heading fontSize="25px" color="#4F585E" mb={2}>About</Heading>
            <Text color="gray.600">
                {data.about}
            </Text>      
        </Box>
        <hr></hr>
        <Heading fontSize="25px" color="#4F585E" m="20px 0 -50px 15px">All Categories</Heading>
        <TabCarousal/>
        <hr/>
        <Box m="20px 15px">
            <Text fontSize="19px" fontWeight="700" mb={3}>Product Details</Text>
            <Text color ="#10847E" fontSize="19px" mb={2}>Brand: {data.company}</Text>
            <Text fontSize="19px" color="gray" mb={2}>Expires on or After 30/01/2023</Text>
            <Text fontSize="19px" color="gray" mb={2}>Country of Origin: India</Text>
            <Link><Text color ="#10847E" fontSize="19px" mb={2}>Manufacturer Details...</Text></Link>
        </Box>
       
        
    </Box>
    )
}
export default Product;