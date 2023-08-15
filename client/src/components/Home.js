import "../styles/Home.scss"
import JobCard from "./JobCard"

function Home({jobs}){
    console.log(jobs)    
    const jobsToDisplay = jobs.map((job)=>(
        <JobCard job={job} />
    ))
    
    return(
        <div className="Home" style={homeContainerStyle}>
            <div className="job-collection" style={collectionStyle}>
                {jobsToDisplay}
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