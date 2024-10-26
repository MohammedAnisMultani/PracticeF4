import { useContext } from "react";
import { AgeContext } from "./App";

const C1 = () => {
    const{age} = useContext(AgeContext)
    return(
        <p>{age}</p>
    )
}

export default C1;