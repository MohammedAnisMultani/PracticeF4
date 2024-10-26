import { createContext, useEffect, useState } from 'react'
import './App.css'
import Navbar from '../component/navbar'

 export const themeContext = createContext()
 const color = {

    light : {
      background : "#fff",
      color : "#000"
    },
    dark : {
      background : '#000',
      color : "#fff"
    }  
 }

function App() {
  const[theme, setTheme] = useState("Light")
  const toggleTheme = () =>{
    setTheme((t)=>{return(t=="light" ? "dark" : "light")})
  }

  useEffect(()=>{
   Object.assign(document.body.style, color[theme])
  },[theme])
  

  return (
  <themeContext.Provider value={{toggleTheme}}>
    <Navbar/>
  </themeContext.Provider>
  )
}

export default App
