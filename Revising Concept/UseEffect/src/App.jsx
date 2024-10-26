import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
 let x = 2;
  const [count, setCount] = useState(0)
 useEffect(()=>{
  console.log("hi there i am in useEffect")
  return function(){
    console.log("cleanUp Fn")
  }
 },[])
  return (
    <>
     <h1>{count}</h1>
     <button onClick={()=>{setCount(count+1)}}>Increment</button>
     <button onClick={()=>{setCount(count-1)}}>decrement</button>
    </>
  )
}

export default App
