

function JobDisplay({job}){
    const {description, pay, location, position, company, about_the_job} = job
    console.log(about_the_job)
    return(<div>
             <div className="job-card" >
            <h3>{position}</h3>
            <p>{description}</p>
            <p>{company}</p>
            <p>{location}</p>
            <p>{pay}</p>
        </div>
    </div>)
}

export default JobDisplay