import C3 from "./c3";

const C2 = ({age}) => {
    return(
     <>
     <p>I am in c2 {age}</p>
     <C3 age={age}/>
     </>
    )
}

export default C2;