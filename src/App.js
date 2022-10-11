import { Box, Container, Text } from '@chakra-ui/layout';
import Footer from './Components/Footer/Footer';
import Slider from './Components/Slider/Slider';
import "./App.css";
function App() {
  return (
    <Box width="100%" className="App">
      <Footer/>
      <Slider/>
    </Box>
  );
}

export default App;
