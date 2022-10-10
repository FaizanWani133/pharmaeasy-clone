import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

function TabCarousal() {
  const tabCards = [
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
    },
    {
      title: "Value Store",
      path: "/",
      img: "https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0",
    },
    {
      title: "Value Store",
      path: "/",
      img: "https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0",
    },
    {
      title: "Value Store",
      path: "/",
      img: "https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0",
    },
  ];
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
      width="100%"
      paddingLeft={{ base: "10px", sm: "20px", lg: "50px", xl: "50px" }}
      paddingRight={{ base: "10px", sm: "20px", lg: "50px", xl: "50px" }}
      mt="50px"
    >
      <Box width="100%" display="flex" position="relative">
        {windowWidth > 1024 && <Button colorScheme="teal" position="absolute" top="50" left="-10">
          L
        </Button>}

        <Flex
          width="100%"
          gap={{ base: "10px", lg: "50px", sm: "30px" }}
          overflowX="scroll"
        >
          {tabCards.map((tab) => (
            <Box
              maxWidth="141px"
              minW={{ base: "99px", sm: "105px", lg: "110px" }}
              border={{
                base: "1px solid transparent",
                sm: "1px solid transparent",
                lg: "transparent",
              }}
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
                fontFamily="sans-serif"
                fontSize={{ base: "14px", sm: "16px", lg: "18px" }}
                fontWeight="500"
              >
                {tab.title}
              </Text>
            </Box>
          ))}
        </Flex>
        {windowWidth > 1024 && <Button colorScheme="teal" position="absolute" top="50" right="-10">
          R
        </Button>}
      </Box>
    </Box>
  );
}

export default TabCarousal;
