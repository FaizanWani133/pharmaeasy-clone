import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FiTrash2 } from "react-icons/fi";
import QuantitySelecter from "./QuantitySelecter";

function CartProduct({ data }) {
  return (
    <Flex
      p={4}
      gap="20px"
      border={"1px solid grey"}
      borderRadius="10px"
      minW={{ lg: "500px" }}
      
    >
      <Box width="60px" height="60px">
        <Image bg="blue" width="60px" height="60px" ></Image>
      </Box>
      <Box flexGrow={"1"}>
        <HStack alignItems={"flex-start"} justify={"space-between"}>
          <Text fontWeight={"500"} noOfLines="2">asd asdadaddadadad asdadaddadadad</Text>
          <IconButton icon={<FiTrash2 fontSize={"20px"} />}></IconButton>
        </HStack>
        <Text fontSize={"14px"} color="rgba(0,0,0,0.6)" mb={"6px"}>
          By Dettol
        </Text>
        <Text fontWeight={"500"}>50g lotion tube</Text>
        <HStack justify={"space-between"}>
          <QuantitySelecter />
          <VStack>
            <HStack>
              <Text fontSize={"12px"} textDecor={"line-through"}>
                $ 540
              </Text>
              <Text fontSize={"12px"} color="red">
                30% OFF
              </Text>
            </HStack>
            <Text textAlign={"right"} fontSize={"14px"} fontWeight="600">$ 542</Text>
          </VStack>
        </HStack>
        <Text  fontSize={"14px"} color="rgba(0,0,0,0.6)">
          Delivery by 15 Oct
        </Text>
      </Box>
    </Flex>
  );
}

export default CartProduct;
