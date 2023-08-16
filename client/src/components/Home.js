import "../styles/Home.scss"
import JobCard from "./JobCard"

function Home({jobs}){
    console.log(jobs)    
    const jobsToDisplay = jobs.map((job)=>(
        <JobCard job={job} key={job.id}/>
    ))
    
    return(
        <div className="Home" style={homeContainerStyle}>
            <div className="job-collection" style={collectionStyle}>
                {jobsToDisplay}
            </div>
            <div className="job-display-container">
                <div className="job-display">
                    
                </div>
            </div>
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
    
}