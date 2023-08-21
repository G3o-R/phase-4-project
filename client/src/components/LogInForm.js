import { useState } from "react"

function LoginForm(){

    const [loginFormData, setLoginForm] = useState({
        username: "",
        password: ""
    })

    const {password, username} = loginFormData

    function handleChange(e){
        let name = e.target.name
        let value = e.target.value

        setLoginForm({...loginFormData, [name]:value})
        console.log(loginFormData)
    }


    return(
        <div className="login" style={loginStyle}>
        <div style={formContainerStyle}>
            <form style={formStyle}>
                <label>Username</label>
                <input type="text" name="username" value={username} placeholder="username..." onChange={handleChange}/>
                <label>Password</label>
                <input type="text" name="password" value={password} placeholder="password..." onChange={handleChange}/>
            </form>
            
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
    aspectRatio:"5/8",
    justifySelf: "center",
    borderRadius: "10px 10px 10px 10px",
}

const formStyle = {
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
}

export default LoginForm