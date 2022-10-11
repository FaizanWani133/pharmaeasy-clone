import {
  Box,
  Button,
 
  Flex,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
export const tabCards = [
    {
      title: "Medicine",
      path: "/medicines",
      img: "https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0",
    },
    {
      title: "Lab Tests",
      path: "/labTests",
      img: "https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0",
    },
    {
      title: "Healthcare",
      path: "/healthcare",
      img: "https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0",
    },
    {
      title: "Health Blogs",
      path: "/",
      img: "https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0",
    },
    {
      title: "PLUS",
      path: "/",
      img: "https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0",
    },
    {
      title: "Offers",
      path: "/offers",
      img: "https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0",
    },
    {
      title: "Surgeries",
      path: "/",
      img: "https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=256x0",
    },
    {
      title: "Value Store",
      path: "/",
      img: "https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0",
    }
    
  ];

function TabCarousal() {
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const scroll = document.getElementById("scrollBar");
  function scrollToY (){
    window.scrollTo(100)
  }
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
      width="100%"
      paddingLeft={{ base: "10px", sm: "20px", lg: "50px", xl: "50px" }}
      paddingRight={{ base: "10px", sm: "20px", lg: "50px", xl: "50px" }}
      mt="50px"
    >
      <Box width="100%"  position="relative">
        {windowWidth > 1024 && <IconButton bg={"rgba(0,0,0,0.5)"} position="absolute" top="50" left="-10" borderRadius="50%" icon={<AiOutlineLeft color="white" />}>
          L
        </IconButton>}

        <Flex
          width="100%"
          gap={{ base: "10px", lg: "50px", sm: "30px" }}
          overflowX="scroll"
          overflowY="hidden"
          paddingY={5}
          className="hideScroll"
          id="scrollBar"
          
        >
          {tabCards.map((tab) => (
            <Box
              maxWidth="141px"
              minW={{ base: "99px", sm: "115px", lg: "133px" }}
              
              key={tab.title}
              _hover={{lg:{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",borderRadius: "10px"}}}
              cursor="pointer"
              paddingX="12px"
              
            >
              <Image
                mb="10px"
                borderBottom="1px solid rgba(0,0,0,0.2)"
                src={tab.img}
                bg={{
                  base: "#BFEDDD",
                  sm: "#BFEDDD",
                  lg: "transparent",
                }}
                borderRadius="5px 5px 0 0"
              ></Image>

              <Text
                
                fontSize={{ base: "14px", sm: "15px", lg: "16px" }}
                fontWeight="500"
                mb={2}
              >
                {tab.title}
              </Text>
            </Box>
          ))}
        </Flex>
        {windowWidth > 1024 && <IconButton onClick={scrollToY} bg={"rgba(0,0,0,0.5)"}  position="absolute" top="50" right="-10" borderRadius="50%" icon={<AiOutlineRight color="white"/>}>
          
        </IconButton>}
      </Box>
    </Box>
  );
}

export default TabCarousal;
