import React,{useState,createContext} from 'react'

 export const SideBarContext = createContext()

 const SideBarProvider = ({children}) => {
    const[open,setOpen] = useState(false)
    const handleClose = ()=>{
        setOpen(false)
    }
  return (
    <SideBarContext.Provider value={{open,setOpen,handleClose}}>
        {children}
    </SideBarContext.Provider>
  )
}

export default SideBarProvider