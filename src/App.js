import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import {Provider} from "react-redux"
import store from './store/store';

function App() {
  return (
    <>
    {/* <Dummy/> */}
    <Provider store = {store}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path = "/" element={<Home/>}></Route>
          <Route exact path = "/cart" element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
