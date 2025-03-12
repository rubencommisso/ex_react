import Navbar from "../Navbar"
import { Outlet } from "react-router-dom"

const PuclicLayout = () => {
    return(
       <>
       <Navbar/>
       <Outlet/>
       </> 
    )
}

export default PuclicLayout