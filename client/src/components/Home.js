import "../styles/Home.scss"
import JobCard from "./JobCard"
import JobDisplay from "./JobDisplay"
import { useState } from "react"
import { useEffect } from "react"

function Home({jobs}){
    // console.log(jobs)
    const [jobDisplay, setJobDisplay] = useState(false)

    useEffect(()=>{
        if (jobs[0] && jobs[0].id){
            setJobDisplay(jobs.find((job)=>job.id === jobs[0].id))
        }
    },[jobs])
    
    // console.log(jobDisplay)
    const jobsToDisplay = jobs.map((job)=>(
        <JobCard job={job} key={job.id} setIndex={setJobDisplay}/>
    ))


    
    
    return(
        <div className="Home" style={homeContainerStyle}>
            <div className="job-collection" style={collectionStyle}>
                {jobsToDisplay}
            </div>
                {!jobDisplay ? <h1>loading...</h1> : <JobDisplay job={jobDisplay}/>}
        </div>
    )
}

export default Home

const collectionStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    justifyItems: "center",
    gap:"10px"
}

const homeContainerStyle = {
    display:"flex",
    gap:"4rem",
    justifyContent:"center"
}