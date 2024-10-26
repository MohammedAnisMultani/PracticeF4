import { useContext } from "react"
import { themeContext } from "../src/App"


const Navbar = () => {
    const{toggleTheme} = useContext(themeContext)
    return(
        <button onClick={toggleTheme}>Click Me</button>
    )
}

export default Navbar