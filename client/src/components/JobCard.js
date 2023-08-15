import "../styles/JobCard.scss"

function JobCard({job}){
    const {company, description, location, pay, position} = job
    return(
        <div className="job-card" style={cardStyle}>
            <h3>{position}</h3>
            <p>{description}</p>
            <p>{company}</p>
            <p>address here</p>
            <p>{pay}</p>
        </div>
    )
}

export default JobCard

const cardStyle={
    border: "1px solid black",
    borderRadius: "10px 10px 10px 10px",
    minWidth: "25rem",
    maxWidth: "40rem",
    // aspectRatio,
}