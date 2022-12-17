import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <>
    {/* <Dummy/> */}
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path = "/" element={<Home/>}></Route>
        <Route exact path = "/cart" element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
