import MyJobCard from "./MyJobCard"

function MyJobs({user}){
   
    console.log(user)
    const displayMyJobCards = user.job_applications.map((job_application)=><MyJobCard job_application={job_application} key={job_application.id}/>)

    return(
        <div className="my-jobs">
            {!user ? <h1>Login and get hired!</h1>: (user.jobs == false ? <h1>Start Applying!!!</h1>: displayMyJobCards)}
        </div>
    )
}

export default MyJobs