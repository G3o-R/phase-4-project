import "../styles/NavBar.scss"
import { NavLink } from "react-router-dom"
import logo from "../job-search-svgrepo-com.svg"

function NavBar({user}){

    const isLoggedIn = user === null ? false : true

    function handleLogout(){

    }
    return(
            <div className="navbar">
                <div className="navbar-left">
                <NavLink to="/" className="link"><img src={logo} alt="job png" className="jobs-svg" /></NavLink>
                </div>
                <div className="navbar-right">
                    <NavLink to="/my-jobs" style={{paddingRight: "1rem"}}>My Jobs</NavLink>
                    {isLoggedIn ? <NavLink className="link" onClick={handleLogout}>Log Out</NavLink> :<NavLink to="/login" className="link">Login</NavLink>}
                </div>
                {/* <NavLink to="/companies" className="link">Company Lists</NavLink> */}
                {/* <NavLink to="/create-company-job" className="link">Create Company/Job</NavLink> */}
            </div>
    )
}

export default NavBar