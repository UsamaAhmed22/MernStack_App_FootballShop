import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Component/navbar'; // corrected import
import Aboutus from './Component/Aboutus';
import ProductForm from './Component/ProductForm/ProductForm.js';
import ProductList from './Component/ProductList/ProductList.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path = '/AboutUs' element = {<Aboutus/>} /> 
    <Route path='/product' element = {<ProductForm/>} />
    <Route path='/productlist' element = {<ProductList/>} />
    </Routes>
  </BrowserRouter>
);
}

export default App;
