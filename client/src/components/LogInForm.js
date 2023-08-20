import { useState } from "react"

function LoginForm(){
    return(
        <div className="login" style={loginStyle}>
        <div style={formContainerStyle}>
            <form>

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

export default LoginForm