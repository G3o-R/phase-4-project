import { useNavigate } from "react-router"

function JobDisplay({job, user}){
    const {description, pay, location, position, company, about_the_job} = job
    const navigate = useNavigate()

    function handleApply(){
        if (user){
            console.log(`${user.username} applied for ${position} position`)
        } else {
            alert("you have to login")
            navigate("/login")
        }
    }

    return(<div style={{
    border: "1px solid black",
    borderRadius:"10px 10px 10px 10px",
    width:"25rem",
    height: "60rem",
    }}>
             <div className="job-card" style={displayStyles}>
            <h3 style={{marginBottom:"2px"}}>{position}</h3>
            <p style={{marginBottom:"2px",marginTop:"0"}}>{description}</p>
            <p style={{marginBottom:"2px",marginTop:"0"}}>{company}</p>
            <p style={{marginBottom:"2px",marginTop:"0"}}>{location}</p>
            <p style={{marginBottom:"2px",marginTop:"0"}}>{pay}</p>
            <button onClick={handleApply} className="apply-now" style={{width:"80px"}}>Apply Now</button>
        </div>
        <p>{about_the_job}</p>
    </div>)
}

const displayStyles = {
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start",
    border: "1px solid black",
    borderRadius: "10px 10px 0px 0px",
    paddingLeft:"10px"
}

export default JobDisplay