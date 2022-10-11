

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Pages/AllRoutes';

import Footer from './Components/Footer/Footer';
import Slider from './Components/Slider/Slider';
import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
      {/* <Slider/> */}
    </div>
  );
}

export default App;
