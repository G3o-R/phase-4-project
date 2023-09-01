import MyJobCard from "./MyJobCard"


function MyJobs({user}){
    const displayMyJobCards = !user ? null : user.job_applications.map((job_application)=><MyJobCard job_application={job_application} key={job_application.id}/>)

    return(
        <div className="my-jobs">
            {!user ? <h1>Login and get hired!</h1>: (user.job_applications == false ? <h1>Start Applying!!!</h1>: displayMyJobCards)}
        </div>
    )
}

export default MyJobs