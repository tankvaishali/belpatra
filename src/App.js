
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Home/Homepage';
import Contactmain from './Components/Contactus/Contactmain';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/contact' element={<Contactmain/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
