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


const Product = (props) => {
    const {data} = props;
    console.log(data);

    const ref = useRef();
    const [cartCount,setCartCount] = useState(0);
    // for scrolling on button press code
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')
    const btnRef = React.useRef(null)
    return (
        <Box>
        <Box height="100px" border="1px solid black"></Box>
        <Flex m="50px 15px" justifyContent="space-between" position="relative">
            <Box className="left">
                <Flex>
                    <Box className="imagebox" mr="15px">
                        <Box className="image" p="15px 30px 15px 30px" border="1px solid #cecece" borderRadius="10px">
                            <Box position ="realtive" width="250px" height="250px">
                                <Img src={data.img1} ref={ref} alt={data.id} width="100%" height="100%"/>
                            <Box bgColor="white" position="absolute" top="340px" left="250px" width="30px" height="30px"borderRadius="50%" boxShadow ="0 0 10px #cecece" p="5px">
                                <Img src={Share} alt="Share" width="102%" height="100%"/>
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
                    <Box className="contentbox" pl="25px" fontFamily="'Open Sans',sans-serif">
                      <Heading fontSize="25px" color="#4F585E" mb={2}>{data.desc}</Heading>
                      <Link><Text color="#10847E" mb={2}>Visit {data.company} store</Text></Link>
                      <Flex gap={5} mb={3}>
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
                            <Text fontSize = "12px" bgColor="pink.300" p="5px 20px" color="white" as="b">{data.offer}% OFF</Text>
                        </Flex>
                        <Box>
                            <Button ref={btnRef} onClick={onOpen}>Add To Cart</Button>
                        </Box>
                        <Modal
                            onClose={onClose}
                            finalFocusRef={btnRef}
                            isOpen={isOpen}
                            scrollBehavior={scrollBehavior}
                            isCentered
                            
                        >
                            <ModalOverlay bg="transparent"/>
                            <ModalContent w="155px" h="345px" ml="15%">
                            {/* <ModalHeader>Modal Title</ModalHeader> */}
                            {/* <ModalCloseButton /> */}
                            <ModalBody>
                                <Box>1</Box>
                                <Box>2</Box>
                                <Box>3</Box>
                                <Box>4</Box>
                                <Box>5</Box>
                                <Box>6</Box>
                                <Box>7</Box>
                                <Box>8</Box>
                                <Box>9</Box>
                                <Box>10</Box>
                                <Box>1</Box>
                                <Box>2</Box>
                                <Box>3</Box>
                                <Box>4</Box>
                                <Box>5</Box>
                                <Box>6</Box>
                                <Box>7</Box>
                                <Box>8</Box>
                                <Box>9</Box>
                                <Box>10</Box>
                            </ModalBody>
                            </ModalContent>
                        </Modal>
                      </Flex>
                      <Text color="gray" fontSize="10px">Inclusive of all taxes</Text>
                      <Text  color="#4F585E" fontSize="12px" fontWeight="600" >Delivery by Tomorrow, before 10:00 pm</Text>
                    </Box>
                </Flex>
                <Flex>
                    <Box className="imagebox" mr="15px">
                        <Box className="image" p="15px 30px 15px 30px" border="1px solid #cecece" borderRadius="10px">
                            <Box position ="realtive" width="250px" height="250px">
                                <Img src={data.img1} ref={ref} alt={data.id} width="100%" height="100%"/>
                            <Box bgColor="white" position="absolute" top="340px" left="250px" width="30px" height="30px"borderRadius="50%" boxShadow ="0 0 10px #cecece" p="5px">
                                <Img src={Share} alt="Share" width="102%" height="100%"/>
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
                    <Box className="contentbox" pl="25px" fontFamily="'Open Sans',sans-serif">
                      <Heading fontSize="25px" color="#4F585E" mb={2}>{data.desc}</Heading>
                      <Link><Text color="#10847E" mb={2}>Visit {data.company} store</Text></Link>
                      <Flex gap={5} mb={3}>
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
                            <Text fontSize = "12px" bgColor="pink.300" p="5px 20px" color="white" as="b">{data.offer}% OFF</Text>
                        </Flex>
                        <Box>
                            <Button ref={btnRef} onClick={onOpen}>Add To Cart</Button>
                        </Box>
                        <Modal
                            onClose={onClose}
                            finalFocusRef={btnRef}
                            isOpen={isOpen}
                            scrollBehavior={scrollBehavior}
                            isCentered
                            
                        >
                            <ModalOverlay bg="transparent"/>
                            <ModalContent w="155px" h="345px" ml="15%">
                            {/* <ModalHeader>Modal Title</ModalHeader> */}
                            {/* <ModalCloseButton /> */}
                            <ModalBody>
                                <Box>1</Box>
                                <Box>2</Box>
                                <Box>3</Box>
                                <Box>4</Box>
                                <Box>5</Box>
                                <Box>6</Box>
                                <Box>7</Box>
                                <Box>8</Box>
                                <Box>9</Box>
                                <Box>10</Box>
                                <Box>1</Box>
                                <Box>2</Box>
                                <Box>3</Box>
                                <Box>4</Box>
                                <Box>5</Box>
                                <Box>6</Box>
                                <Box>7</Box>
                                <Box>8</Box>
                                <Box>9</Box>
                                <Box>10</Box>
                            </ModalBody>
                            </ModalContent>
                        </Modal>
                      </Flex>
                      <Text color="gray" fontSize="10px">Inclusive of all taxes</Text>
                      <Text  color="#4F585E" fontSize="12px" fontWeight="600" >Delivery by Tomorrow, before 10:00 pm</Text>
                    </Box>
                </Flex>
            </Box>
            
            <Box className="right" w='370px' position="sticky" top="0">
                <Box  height="100px" border="1px solid black" borderRadius="10px"></Box>
            </Box>
        </Flex>
        </Box>
    )
}
export default Product;