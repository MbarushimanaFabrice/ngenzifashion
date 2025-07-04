import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contect from './pages/Contect'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Order from './pages/Order'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/placeOrder' element={<PlaceOrder/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/contect' element={<Contect/>}/>
          <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
