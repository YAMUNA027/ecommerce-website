import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from "./Pages/Shop";
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import ShopCategory from './Pages/ShopCategory';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import "./App.css";
import './index.css';
import AboutPage from './Pages/About';
import ContactForm from './Pages/CSS/ContactForm';
import CheckoutPage from './Pages/CheckoutPage';
import Payment from './Pages/Payments';


function App() {

  return (
    <div>
    <BrowserRouter>
   
    <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactForm/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="/payment" element={<Payment/>}/>
        
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
