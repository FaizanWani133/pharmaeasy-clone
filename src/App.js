import './App.css';
import { LogInSignUp } from './Components/LogInPages/QuickRegister';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Pages/AllRoutes';

import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      {/* <LogInSignUp /> */}
      <Navbar/>
      <AllRoutes/>
      <Footer />
    </div>
    )
}

export default App;
