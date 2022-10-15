import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
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
  Button,
  Skeleton,
} from "@chakra-ui/react";
import ProductsGrid from "../Components/Products/ProductsGrid";
import ProductsBreadCrumb from "../Components/Products/ProductsBreadCrum";
import Tabs from "../Components/Navbar/Tabs";
import { Stack } from "react-bootstrap";




function Products() {
  const getCurrPage = (value) =>{
    value = Number(value)
  
    if(value<=0){
      value=1;
    }
    if(!value){
      value=1;
    }
   
    
    return value;
  }
  const [totalPages, setTotalPages] = useState();
  const [loading, setLoading] = useState(false);
  const { cat } = useParams();
  const newCat = cat.split("-");
  const catSplit = newCat.join(" ");
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useSearchParams();
  const [orderBy,setOrderBy] = useState("");
  const arr = [];
  const [page, setPage] = useState(getCurrPage(search.get("page")) || 1);
  
  const [filters,setFilters] = useState(search.get("brand") || [] ) ;
  
  
console.log(search.get("brand"));
  // console.log(search);
 const p1 = `&_sort=newPrice&_order=${orderBy}`
 const p2 = `&_sort=offer&_order=desc`
 const p3 = `&company=${filters}`
 
  console.log(orderBy)
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3001/Products?_page=${page}&_limit=9${orderBy && p1}`)
      .then((res) => {
        // console.log(res);
        setProducts(res.data);
        setTotalPages(Math.ceil(res.headers["x-total-count"] / 9));
      })
      .catch((err) => console.log(err))
      .finally(() => {
        
          setLoading(false)
          

        
      });
  }, [page,orderBy]);
  if(page>totalPages){
    setPage(totalPages)
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(()=>{
    let paramObj = {page};
    if(orderBy){
      paramObj.orderBy = orderBy;
    }
    // if(filters){
    //   paramObj.brand = [...filters]
    // }
    setSearch(paramObj)
  },[page,orderBy,filters])

  for (let i = 0; i < totalPages; i++) arr[i] = i + 1;
  console.log(arr);
  return (
    <>
      <Tabs />
      <Box
        w={{ base: "90%", sm: "90%", lg: "90%", xl: "80%" }}
        margin="80px auto"
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
                  <Radio isChecked={true} colorScheme="green"></Radio>
                </HStack>
              </Box>

              <Divider />
              {loading && <Stack  ><Skeleton mt={"20px"} mb={"20px"} height={"20px"}/>
              <Skeleton mb={"20px"} height={"20px"}/>
              <Skeleton mb={"20px"} height={"20px"}/>
              <Skeleton mb={"20px"} height={"20px"}/>
              <Skeleton mb={"20px"} height={"20px"}/></Stack> }
              { loading === false && <Box width="100%">
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
              </Box>}

              <Divider />
              {loading && <Stack  ><Skeleton mt={"20px"} mb={"20px"} height={"20px"}/>
              <Skeleton mb={"20px"} height={"20px"}/>
              <Skeleton mb={"20px"} height={"20px"}/>
              <Skeleton mb={"20px"} height={"20px"}/>
              <Skeleton mb={"20px"} height={"20px"}/></Stack> }
              {loading === false && <Box width="100%">
                <Text fontSize={"16px"} fontWeight="700" mb="20px" mt={"20px"}>
                  Brand
                </Text>
                <HStack mb="26px" width={"100%"} justify="space-between">
                  <Text fontSize={"14px"} fontWeight="400">
                    Dettol
                  </Text>
                  <Checkbox colorScheme="green" onChange={()=>{
                    
                    if(filters.includes("dettol")){
                      setFilters(filters.filter(el=>el!=="dettol"))
                    }else{
                      setFilters([...filters,"dettol"])
                    }
                    
                  }} ></Checkbox>
                </HStack>
                <HStack mb="26px" width={"100%"} justify="space-between">
                  <Text fontSize={"14px"} fontWeight="400">
                    Everherb
                  </Text>
                  <Checkbox colorScheme="green" onChange={()=>{
                    
                    if(filters.includes("everhub")){
                      setFilters(filters.filter(el=>el!=="everhub"))
                    }else{
                      setFilters([...filters,"everhub"])
                    }
                    
                  }}></Checkbox>
                </HStack>
                <HStack mb="26px" width={"100%"} justify="space-between">
                  <Text fontSize={"14px"} fontWeight="400">
                    Savlon
                  </Text>
                  <Checkbox colorScheme="green" onChange={()=>{
                    
                    if(filters.includes("savlon")){
                      setFilters(filters.filter(el=>el!=="savlon"))
                    }else{
                      setFilters([...filters,"savlon"])
                    }
                    
                  }}></Checkbox>
                </HStack>
                <HStack mb="26px" width={"100%"} justify="space-between">
                  <Text fontSize={"14px"} fontWeight="400">
                    Pharmeasy
                  </Text>
                  <Checkbox colorScheme="green" onChange={()=>{
                    
                    if(filters.includes("PHARMEASY")){
                      setFilters(filters.filter(el=>el!=="PHARMEASY"))
                    }else{
                      setFilters([...filters,"PHARMEASY"])
                    }
                    
                  }}></Checkbox>
                </HStack>
                <HStack mb="26px" width={"100%"} justify="space-between">
                  <Text fontSize={"14px"} fontWeight="400">
                    Revital
                  </Text>
                  <Checkbox colorScheme="green" onChange={()=>{
                    
                    if(filters.includes("revital")){
                      setFilters(filters.filter(el=>el!=="revital"))
                    }else{
                      setFilters([...filters,"revital"])
                    }
                    
                  }}></Checkbox>
                </HStack>
              </Box> }
              
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
                  <Select value={orderBy} onChange={(e)=>{setOrderBy(e.target.value)}} placeholder="Popularity">
                    <option value="asc">Price low to high </option>
                    <option value="desc">Price high to low </option>
                     <option value="offer">Discount</option>
                  </Select>
                </Box>
              </HStack>
            </HStack>
            <ProductsGrid data={products} loading={loading} />
            {loading && <Skeleton><HStack width={"fit-content"} mt={"50px"} justify="center" spacing={"30px"}>
              {arr.map((el) => (
                <Button
                  colorScheme={"teal"}
                  onClick={() => setPage(el)}
                  disabled={page === el}
                  key={el}
                >
                  {el}
                </Button>
              ))}
            </HStack></Skeleton>}
            {loading === false && <HStack mt={"50px"} justify="center" spacing={"30px"}>
              {arr.map((el) => (
                <Button
                  colorScheme={"teal"}
                  onClick={() => setPage(el)}
                  disabled={page === el}
                  key={el}
                >
                  {el}
                </Button>
              ))}
            </HStack>}
            
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Products;
