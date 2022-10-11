import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

function Banner() {
  return (
    <Box bg={"#8678DE"}>
        <Box height="200px" display="flex" padding={{base:"10px",sm:"20px",lg:"30px",xl:"40px"}} width="100%" bg="radial-gradient(340px 340px at 115% -15%, rgba(227, 128, 183, 0.28) 1%, rgba(188, 104, 150, 0.49) 45%, transparent), radial-gradient(340px 340px at -15% 115%, rgba(227, 128, 183, 0.28) 1%, rgba(188, 104, 150, 0.49) 45%, transparent)">
<Box><Text>Become a PLUS member</Text><Text>And enjoy extra bachat on every order</Text></Box>
<Box><Text>Save flat 5% extra on medicines & enjoy FREE delivery with PLUS membership</Text><Button>Explore Now</Button></Box>
</Box>
    </Box>
    
  );
}

export default Banner;
