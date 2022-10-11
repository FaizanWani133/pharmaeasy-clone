import { Box, Flex,  Image, Text } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';



export const categories = [
    {
        title:"Covid essentials",
        image:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6d462f424a43372ea8b7b6f8ca13e052.png?f=png?dim=256x0",
        path:"/healthcare/covidEssentials"
    },
    {
        title:"Personal Care",
        image:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9f446c0e74273d70b0baf85e4ff0f76a.png?f=png?dim=256x0",
        path:"/healthcare/personalCare"
    },
    {
        title:"Health food and drinks",
        image:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/aace6d1f0dc03f1f8c6e26dd880e1934.png?f=png?dim=256x0",
        path:"/healthcare/healthFoodAndDrinks"
    },
    {
        title:"Beauty",
        image:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/3c7ab4d29c6631f7a5cb7eafd3bfbc79.png?f=png?dim=256x0",
        path:"/healthcare/beauty"
    },
    {
        title:"Skin care",
        image:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9b3ad6971475304e9e1614ac30d4545a.png?f=png?dim=256x0",
        path:"/healthcare/skinCare"
    },
    {
        title:"Home care",
        image:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/dc96175686f135b5a22d1e57165d0246.png?f=png?dim=256x0",
        path:"/healthcare/homeCare"
    },
    {
        title:"Ayurvedic care",
        image:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ecad9a974e003fb987858b3ee81413c6.png?f=png?dim=256x0",
        path:"/healthcare/ayurvedicCare"
    },
    {
        title:"Sexual wellness",
        image:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f970ef9868093acb9d1d37a9387912f9.png?f=png?dim=256x0",
        path:"/healthcare/sexualWellness"
    },
    {
        title:"Fitness supplements",
        image:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9cf0c849550a38109738815b3fc2fac6.png?f=png?dim=256x0",
        path:"/healthcare/fitnessSupplements"
    },
    {
        title:"Mother and baby care",
        image:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/efdbfba5bfbb3b809728b627e7dfa118.png?f=png?dim=256x0",
        path:"/healthcare/motherAndBabyCare"
    },
    {
        title:"Healthcare devices",
        image:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ac80578390a23bcfb1ed5a4551886ea7.png?f=png?dim=256x0",
        path:"/healthcare/healthcareDevices"
    },
    {
        title:"health condition",
        image:"https://cdn01.pharmeasy.in/dam/discovery/categoryImages/c4582ea6bbf834f08b29d4dc0e84a0e3.png?f=png?dim=256x0",
        path:"/healthcare/healthCondition"
    }
]

function CategoryCraousal() {
  
    
    return (
      <Box
        width="100%"
        paddingLeft={{ base: "10px", sm: "20px", lg: "50px", xl: "50px" }}
        paddingRight={{ base: "10px", sm: "20px", lg: "50px", xl: "50px" }}
        mt="50px"
      >
        <Text align={{base:"center",sm:"center",lg:"left",xl:"left"}} fontSize="26px" fontWeight={"600"} mb="20px">Shop By Category</Text>
        <Box width="100%"  position="relative">
          
  
          <Flex
            width="100%"
            gap={{ base: "10px", lg: "20px", sm: "20px" }}
            overflowX={{base:"hidden",lg:"scroll"}}
            overflowY="hidden"
            
            className="hideScroll"
            flexWrap={{base:"wrap",sm:"wrap"}}
            justifyContent={"space-between"}
            
          >
            {categories.map((tab) => (<Link key={tab.title} to={tab.path} >
              <Box
                
                width={{ base: "100px", sm: "140px", lg: "180px" }}
                
                
               
                cursor="pointer"
                // paddingX="12px"
                
              >
                <Image
                padding="15px"
                border="1px solid rgba(0,0,0,0.2)"
                borderRadius={"10px"}
                  mb="10px"
            
                 
                  src={tab.image}
                  
                  
                ></Image>
  
                <Text
                  
                  fontSize={{ base: "12px", sm: "15px", lg: "16px" }}
                  fontWeight="500"
                  mb={2}
                >
                  {tab.title}
                </Text>
              </Box>
              </Link>
            ))}
          </Flex>
          
        </Box>
      </Box>
    );
  }
  
  

export default CategoryCraousal;