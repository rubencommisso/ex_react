import { Link } from "react-router-dom"
const Navbar = () => {
    return(
        <nav>
            <div class="HomeDiv">
                <Link to="/">Home</Link>
            </div>
            <div class="AboutDiv">
                <Link to="/about">About</Link>
            </div>
        </nav>
    )
}

export default Navbar