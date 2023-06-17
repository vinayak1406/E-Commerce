import React, { useContext, useEffect, useState } from 'react'
import {BsCart} from 'react-icons/bs'
// import {BiUser} from 'react-icons/bi'

import { SideBarContext } from '../contexts/SideBarContext'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import react from '../assets/react.svg'
const Header = () => {
  const[isActive,setActive] = useState(true)
  const{open,setOpen}= useContext(SideBarContext)
  const {itemAmount}=useContext(CartContext)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >60 ? setActive (true): setActive(false);
    })
  })
  return (
    <header className={`${isActive?'bg-white py-4 shadow-md':'bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex items-center justify-between h-full'>
     <Link to={'/'}>
      <div>
        <h1> <img src={react} alt="Shopping App" /></h1>
      </div>
     </Link>

      <div onClick={()=>setOpen(!open)} className='cursor-pointer flex relative max-w-[50px]'>
        <BsCart className='text-2xl'/>
        <div className='bg-red-500 absolute -right-1 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full justify-center items-center text-center'>{itemAmount}</div>
          
        </div>
       
      </div>
    </header>
  )
}

export default Header