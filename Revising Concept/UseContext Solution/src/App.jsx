
import { createContext } from 'react';
import './App.css'
import C2 from './c2';
export const AgeContext = createContext();
function App() {
  let age = 24

  return (
    <>
    <AgeContext.Provider value={age}>
      <C2/> 
      </AgeContext.Provider>
    </>
  )
}

export default App;
