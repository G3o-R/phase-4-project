import "../styles/NavBar.scss"
import { NavLink } from "react-router-dom"
import logo from "../job-search-svgrepo-com.svg"

function NavBar(){
    return(
            <div className="navbar">
                <div className="navbar-left">
                <NavLink to="/" className="link"><img src={logo} className="jobs-svg" /></NavLink>
                </div>
                <div className="navbar-right">
                    <NavLink to="/login" className="link">Login</NavLink>
                </div>
                {/* <NavLink to="/companies" className="link">Company Lists</NavLink> */}
                {/* <NavLink to="/create-company-job" className="link">Create Company/Job</NavLink> */}
            </div>
    )
}

export default NavBar