import MyJobCard from "./MyJobCard"
import styled from 'styled-components'
import { useState } from "react"

const MyJobsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`;


function MyJobs({user}){
    const [showIsOn, setShowIsOn] = useState(false)
    
    const displayMyJobCards =
     !user ? null : user.job_applications.map((job_application)=>
    <MyJobCard job_application={job_application}
     key={job_application.id}/>)
     console.log(showIsOn)

     
    return(
        <MyJobsContainer>
            {!user ? <h1>Login and get hired!</h1>: (user.job_applications == false ? <h1>Start Applying!!!</h1>: displayMyJobCards)}
        </MyJobsContainer>
        
    )
}

export default MyJobs