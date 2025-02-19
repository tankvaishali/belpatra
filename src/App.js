
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Home/Homepage';
import Contactpage from './Components/Contactus/Contactpage';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/contact' element={<Contactpage/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
