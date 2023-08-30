import { useState } from "react"
import { useEffect } from "react"

function MyJobs({user}){
    const [myJobs, setMyJobs] = useState([])
// console.log(user.jobs)
    useEffect(()=>{
        if (user){
            setMyJobs(user.jobs)
        }
    },[user])
    console.log(myJobs)
    const displayJobs = myJobs.map((job)=><h1>{job.description}</h1>)

    return(
        <div className="my-jobs">
            {!user ? <h1>Login and get hired!</h1>: (user.jobs == false ? <h1>Start Applying!!!</h1>: displayJobs)}
        </div>
    )
}

export default MyJobs