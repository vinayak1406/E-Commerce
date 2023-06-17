import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'

import SideBar from './Components/SideBar'
import Products from './Components/Products'
import Hero from './Components/Hero'
import Header from './Components/Header'
import CartItems from './Components/CartItems'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
     <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
      </Routes>
      <SideBar/>
      <Footer/>
     </Router>
    </div>
  )
}

export default App