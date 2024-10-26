import './App.css'
import C1 from './c1';
import C2 from './c2';


function App() {
let age = 23;

  return (
    <>
     <C1/>
     <C2 age={age}/>
    </>
  )
}

export default App
