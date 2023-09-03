import { useState } from "react"
import { useNavigate } from "react-router"

function JobDisplay({job, user, }){
    const {description, pay, location, position, company, about_the_job} = job
    const [showIsOn, setShowIsOn] = useState(false)
    const [email, setEmail] = useState("")
    const [phone_number, setPhoneNumber] = useState("")
    const navigate = useNavigate()

    function handleNewApplication(newApplication){
        console.log(newApplication)
    }

    function showContactForm(){
        if (user){
            setShowIsOn(!showIsOn)
        } else {
            alert("you have to login")
            navigate("/login")
        }
    }

    function handleApplySubmit(e){
        e.preventDefault()
        const contactData = {
            email: email,
            phone_number: phone_number,
            job_id: job.id
        }
        fetch("/job_applications",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(contactData),
        })
        .then((r)=>{ if (r.ok){
            r.json().then((application)=>handleNewApplication(application))
        } else{
            r.json().then((err)=>console.log(err))
        }})
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
            <button onClick={showContactForm} className="apply-now" style={{width:"80px"}}>Interested?</button>
        </div>
            <p>{about_the_job}</p>
            {showIsOn? <div className="apply-form">
                <p>please enter your contact information</p>
                <form className="contact-from" onSubmit={handleApplySubmit}>
                    <input type="text" name="email" value={email} placeholder="email..." onChange={(e)=>setEmail(e.target.value)} />
                    <input type="text" name="phone_number" value={phone_number} placeholder="phone number..." onChange={(e)=>setPhoneNumber(e.target.value)} />
                    <button type="submit">Complete Application</button>
                </form>
            </div> : null}
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