
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Home/Homepage';
import Contactmain from './Components/Contactus/Contactmain';
import Aboutus from './Components/About/Aboutus';
import ProductPage from './Components/Products/ProductPage';
import ProductData from './Components/Products/ProductData';
import ProductInnerForm from './Components/Products/ProductInnerForm';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/about' element={<Aboutus/>}/>
    <Route path='/product' element={<ProductPage/>}/>
    <Route path='/product/:id' element={<ProductData />} />
    <Route path='/product/:id/:id2' element={<ProductInnerForm />} />
    <Route path='/contact' element={<Contactmain/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
