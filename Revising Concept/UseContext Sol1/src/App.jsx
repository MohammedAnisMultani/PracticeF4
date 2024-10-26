


import { createContext } from 'react';
import './App.css'
export const AgeContext = createContext();
function App() {
  let age = 24;

  return (
    <>
    <AgeContext.Provider value={age}>
          <C1/>
      </AgeContext.Provider>
    </>
  )
}

export default App
