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

    function handleChange(e){
        let name = e.target.name
        let value = e.target.value

        setJobFormData({...jobFormData, [name]:value})
    }

    function handleCreateJobSubmit(e){
        e.preventDefault()
        console.log(jobFormData)
    }

    return(<div className="add-new-job-form-container">
        <h2>Add Jobs Here</h2>
        <form onSubmit={handleCreateJobSubmit}>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </label>
        <label>
          Pay:
          <input type="text" name="pay" value={pay} onChange={handleChange}/>
        </label>
        <label>
          Location:
          <input type="text" name="location" value={location} onChange={handleChange}/>
        </label>
        <label>
          Position:
          <input type="text" name="position" value={position} onChange={handleChange}/>
        </label>
        <label>
          Company:
          <input type="text" name="company" value={company} onChange={handleChange}/>
        </label>
        <label>
          About the Job:
          <textarea
            name="about_the_job"
            value={about_the_job}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit">Create Job!</button>
      </form>
    </div>)
}

export default CreateJob