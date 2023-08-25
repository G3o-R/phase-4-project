import { useState } from "react"
import { Link } from "react-router-dom"

function LoginForm(){

    const [loginFormData, setLoginForm] = useState({
        username: "",
        password: ""
    })

    const [errors, setErrors] = useState([])

    const {password, username} = loginFormData

    function handleChange(e){
        let name = e.target.name
        let value = e.target.value

        setLoginForm({...loginFormData, [name]:value})
        console.log(loginFormData)
    }

    function handleLoginSubmit(e){
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginFormData),
        }).then((res) => {
            if (res.ok) {
                res.json().then((user) => console.log(user))
            } else {
                res.json().then((err) => setErrors(err.errors))
            }
        })
    }


    return(
        <div className="login" style={loginStyle}>
        <div style={formContainerStyle}>
            <form style={formStyle} onSubmit={handleLoginSubmit}>
                <label>Username</label>
                <input type="text" name="username" value={username} placeholder="username..." onChange={handleChange}/>
                <label>Password</label>
                <input type="text" name="password" value={password} placeholder="password..." onChange={handleChange}/>
                <button type="submit">Login</button> 
            </form>
            <Link to={"/signup"}>signup instead</Link>
        </div>
        </div>
    )
}

const loginStyle={
    display:"flex",
    justifyContent:"center",

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

export default LoginForm