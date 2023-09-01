

function MyJobCard({job_application}){
    const {company, description, email, location, phone_number, position, status } = job_application

    return (
        <div className="job-card">
            <p>{status}</p>
            <p>{position}</p>
            <p>{company}</p>
            <p>{location}</p>
        </div>
    )
}

export default MyJobCard