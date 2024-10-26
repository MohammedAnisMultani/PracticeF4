import { useContext } from "react"
import { AgeContext } from "./App";

const C2 =()=>{
    const  age = useContext(AgeContext)
    return(
     <p>{age}</p>
    )
}

export default C2;