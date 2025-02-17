import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Home/Homepage';
import Header from './Components/Header';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Header/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
