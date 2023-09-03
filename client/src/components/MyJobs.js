import MyJobCard from "./MyJobCard";
import styled from 'styled-components';
import { useContext, useState } from "react";
import { Context } from "./Context/Context";

const MyJobsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
`;

const Heading = styled.h1`
  font-size: 24px;
  color: #333;
  margin: 1rem 0;
`;

const ErrorsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  text-align: right;
  padding: 1rem;
  background-color: #ffcccc;
  border: 1px solid #ff0000;
  border-radius: 5px;
`;

const ErrorText = styled.p`
  color: #ff0000;
  margin: 0.5rem 0;
`;

function MyJobs() {
  const { user } = useContext(Context);
  const [errors, setErrors] = useState([]);

  const displayMyJobCards = !user
    ? null
    : user.job_applications.map((job_application) => (
        <MyJobCard
          job_application={job_application}
          key={job_application.id}
          setErrors={setErrors}
        />
      ));
  return (
    <MyJobsContainer>
      {!user ? (
        <Heading>Login and get hired!</Heading>
      ) : user.job_applications.length === 0 ? (
        <Heading>Start Applying!!!</Heading>
      ) : (
        displayMyJobCards
      )}
      {errors.length > 0 && (
        <ErrorsContainer>
          {errors.map((error, index) => (
            <ErrorText key={index}>{error}</ErrorText>
          ))}
        </ErrorsContainer>
      )}
    </MyJobsContainer>
  );
}

export default MyJobs;
