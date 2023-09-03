import JobCard from "./JobCard";
import JobDisplay from "./JobDisplay";
import { useState, useEffect } from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
`;

const JobCollection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 10px;
`;

const JobDisplayContainer = styled.div`
  position: sticky;
  top: 20px;
  border-radius: 10px;
  width: 25rem;
  height: 60rem;
`; 

function Home({ jobs }) {
  const [jobDisplay, setJobDisplay] = useState(false);

  useEffect(() => {
    if (jobs[0] && jobs[0].id) {
      setJobDisplay(jobs.find((job) => job.id === jobs[0].id));
    }
  }, [jobs]);

  const jobsToDisplay = jobs.map((job) => (
    <JobCard job={job} key={job.id} setIndex={setJobDisplay} />
  ));

  return (
    <HomeContainer>
      <JobCollection>{jobsToDisplay}</JobCollection>
      {!jobDisplay ? <h1>loading...</h1> : (
        <JobDisplayContainer>
          <JobDisplay job={jobDisplay} />
        </JobDisplayContainer>
      )}
    </HomeContainer>
  );
}

export default Home;
