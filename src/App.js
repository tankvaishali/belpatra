
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Home/Homepage';
import Contactmain from './Components/Contactus/Contactmain';
import Aboutus from './Components/About/Aboutus';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/about' element={<Aboutus/>}/>
    <Route path='/contact' element={<Contactmain/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
