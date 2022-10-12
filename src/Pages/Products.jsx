import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Checkbox,
  Divider,
  Flex,
  HStack,
  Radio,
  RadioGroup,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import ProductsGrid from "../Components/Products/ProductsGrid";
import ProductsBreadCrumb from "../Components/Products/ProductsBreadCrum";
import Tabs from "../Components/Navbar/Tabs";

function Products() {
  const { cat } = useParams();
  const newCat = cat.split("-");
  const catSplit = newCat.join(" ");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/Products?_page=1&_limit=9`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Tabs />
      <Box
        w={{ base: "90%", sm: "90%", lg: "90%", xl: "80%" }}
        margin="140px auto"
        color={"rgba(0,0,0,0.7)"}
      >
        <ProductsBreadCrumb cat={catSplit} />
        <Flex mt={10} justifyContent="space-between">
          <Box display={{ base: "none", xl: "block" }} width="250px">
            <VStack alignItems="start" width="100%">
              <Text fontSize="26px" fontWeight="600" mb="40px">
                Filter
              </Text>
              <Box width="100%">
                <Text fontSize={"16px"} fontWeight="700" mb="26px">
                  Category
                </Text>
                <HStack mb="26px" width={"100%"} justify="space-between">
                  <Text fontSize={"14px"} fontWeight="400">
                    {catSplit}
                  </Text>
                  <Radio isChecked="true" colorScheme="green"></Radio>
                </HStack>
              </Box>

              <Divider />
              <Box width="100%">
                <Text fontSize={"16px"} fontWeight="700" mb="20px" mt={"20px"}>
                  Sub Category
                </Text>
                <RadioGroup defaultValue="2">
                  <HStack mb="26px" width={"100%"} justify="space-between">
                    <Text fontSize={"14px"} fontWeight="400">
                      Nutritional Drinks
                    </Text>
                    <Radio value={"1"} colorScheme="green"></Radio>
                  </HStack>
                  <HStack mb="26px" width={"100%"} justify="space-between">
                    <Text fontSize={"14px"} fontWeight="400">
                      Health Food
                    </Text>
                    <Radio value={"2"} colorScheme="green"></Radio>
                  </HStack>
                  <HStack mb="26px" width={"100%"} justify="space-between">
                    <Text fontSize={"14px"} fontWeight="400">
                      Diabetic Care
                    </Text>
                    <Radio value={"3"} colorScheme="green"></Radio>
                  </HStack>
                  <HStack mb="26px" width={"100%"} justify="space-between">
                    <Text fontSize={"14px"} fontWeight="400">
                      Beverages
                    </Text>
                    <Radio value={"4"} colorScheme="green"></Radio>
                  </HStack>
                  <HStack mb="26px" width={"100%"} justify="space-between">
                    <Text fontSize={"14px"} fontWeight="400">
                      Weight Management
                    </Text>
                    <Radio value={"5"} colorScheme="green"></Radio>
                  </HStack>
                </RadioGroup>
              </Box>

              <Divider />
              <Box width="100%">
                <Text fontSize={"16px"} fontWeight="700" mb="20px" mt={"20px"}>
                  Brand
                </Text>
                <HStack mb="26px" width={"100%"} justify="space-between">
                  <Text fontSize={"14px"} fontWeight="400">
                    Dettol
                  </Text>
                  <Checkbox colorScheme="green" >
                    
                  </Checkbox>
                </HStack>
                <HStack mb="26px" width={"100%"} justify="space-between">
                  <Text fontSize={"14px"} fontWeight="400">
                  Everherb
                  </Text>
                  <Checkbox colorScheme="green" >
                    
                  </Checkbox>
                </HStack>
                <HStack mb="26px" width={"100%"} justify="space-between">
                  <Text fontSize={"14px"} fontWeight="400">
                  Savlon
                  </Text>
                  <Checkbox colorScheme="green" >
                  
                  </Checkbox>
                </HStack>
                <HStack mb="26px" width={"100%"} justify="space-between">
                  <Text fontSize={"14px"} fontWeight="400">
                  Pharmeasy
                  </Text>
                  <Checkbox colorScheme="green" >
                  
                  </Checkbox>
                </HStack>
                <HStack mb="26px" width={"100%"} justify="space-between">
                  <Text fontSize={"14px"} fontWeight="400">
                  Revital
                  </Text>
                  <Checkbox colorScheme="green" >
                  
                  </Checkbox>
                </HStack>
                
              </Box>
            </VStack>
          </Box>
          <Box flexGrow={1} ml={{ xl: "50px" }}>
            <HStack
              flexWrap={"wrap"}
              justifyContent={{
                base: "center",
                sm: "space-between",
                lg: "space-between",
                xl: "space-between",
              }}
              alignItems={"center"}
              mb="40px"
            >
              <Box>
                <Text fontSize="26px" fontWeight="600">
                  {catSplit}
                </Text>
              </Box>
              <HStack>
                <Text noOfLines={1}>Sort By:</Text>
                <Box>
                  <Select placeholder="Popularity">
                    <option value="option1">Price low to high </option>
                    <option value="option2">Price high to low </option>
                    <option value="option3">Discount</option>
                  </Select>
                </Box>
              </HStack>
            </HStack>
            <ProductsGrid data={products} />
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Products;
