import { useState } from "react"


function CreateJob(){
    const [jobFormData, setJobFormData] = useState({
        description:"",
        pay: "",
        location:"",
        position:"",
        company:"",
        about_the_job:""
    })
    const {description, pay, location, position, company, about_the_job} = jobFormData
    return(<div>
        <h2>Add Jobs Here</h2>
        <form >

        </form>
    </div>)
}

export default CreateJob