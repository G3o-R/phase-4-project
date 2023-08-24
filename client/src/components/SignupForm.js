import { useState } from "react"
import { Link } from "react-router-dom"


function SignupForm(){
    const [signupData, setSignupData] = useState({
        username: "",
        password: "",
        password_confirmation: ""
    })

    const {username, password, password_confirmation} = signupData
    
    function handleChange(e){
        let name = e.target.name
        let value = e.target.value

        setSignupData({...signupData, [name]:value})
    }

    function handleCreateAccountSubmit(e){
        e.preventDefault()
        console.log(signupData)
    }

    return(
        <div className="signup" style={{display:"flex", justifyContent:"center"}}>
            <div style={formContainerStyle}>
                <form style={formStyle} onSubmit={handleCreateAccountSubmit}>
                    <label>Username</label>
                    <input type="text" name="username" value={username} placeholder="create username..." onChange={handleChange}/>
                    <label>Password</label>
                    <input type="text" name="password" value={password} placeholder="password..." onChange={handleChange}/>
                    <label>Confrim Password</label>
                    <input type="text" name="password_confirmation" value={password_confirmation} placeholder="confirm password..." onChange={handleChange}/>
                    <button type="submit">Create Account</button> 
                </form>
                <Link to={"/login"}>login instead</Link>
            </div>
        </div>
    )
}


const formContainerStyle ={
    marginTop:"3rem",
    backgroundColor:"bisque",
    width:"30rem",
    aspectRatio:"5/7",
    justifyContent: "center",
    borderRadius: "10px 10px 10px 10px",
    paddingTop: "5rem",
}

const formStyle = {
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
}
export default SignupForm