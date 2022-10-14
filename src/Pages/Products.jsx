import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Flex, HStack, Select, Text, VStack } from "@chakra-ui/react";
import ProductsGrid from "../Components/Products/ProductsGrid";
import ProductsBreadCrumb from "../Components/Products/ProductsBreadCrum";

function Products() {
  const { cat } = useParams();
  const newCat = cat.split("-");
  const catSplit = newCat.join(" ")
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
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (<>
  
  <Box w={{ base: "100%", sm: "95%", lg: "90%", xl: "75%" }} margin="20px auto" >
  <ProductsBreadCrumb cat={catSplit}/>
  <Flex mt={10} justifyContent="space-between" >
      <Box display={{ base: "none", xl: "block" }} width="250px">
        <VStack alignItems="start">
          <Text  fontSize="26px" fontWeight="600" mb="40px">
            Filters
          </Text>
        </VStack>
      </Box>
      <Box flexGrow={1}>
        <HStack justifyContent="space-between" mb="40px">
          <Box>
            <Text fontSize="26px" fontWeight="600">{catSplit}</Text>
          </Box>
          <HStack>
            <Text noOfLines={1}>Sort By:</Text>
            <Box><Select placeholder="Popularity">
              <option value="option1">Price low to high </option>
              <option value="option2">Price high to low </option>
              <option value="option3">Discount</option>
            </Select></Box>
            
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
