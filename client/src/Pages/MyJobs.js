import { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import styled from "styled-components";


const MyJobsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function MyJobs({user}) {
  const [myJobs, setMyJobs] = useState([]);

  useEffect(() => {
    if (user) {
      setMyJobs(user.jobs);
    }
  }, [user]);

  const displayMyJobs = myJobs.map((job) => (
    <JobCard job={job} clickEnabled={false} key={job.id} />
  ));

  return (
    <MyJobsContainer>
      <div>{displayMyJobs}</div>
    </MyJobsContainer>
  );
}

export default MyJobs;