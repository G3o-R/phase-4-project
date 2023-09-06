import React from "react";
import styled from "styled-components";

const JobCardContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  width: 200px;
  height: 200px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const JobTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const JobDescription = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
`;

const JobInfo = styled.p`
  font-size: 12px;
  color: #888;
`;

function JobCard({ job, setIndex,clickEnabled=true }) {
  const { company, description, location, pay, position } = job;

  const handleClick = () =>{
    if(clickEnabled){
      setIndex(job)
    }
  }

  return (
    <JobCardContainer onClick={handleClick}>
      <JobTitle>{position}</JobTitle>
      <JobDescription>{description}</JobDescription>
      <JobInfo>{company}</JobInfo>
      <JobInfo>{location}</JobInfo>
      <JobInfo>${pay}/hr</JobInfo>
    </JobCardContainer>
  );
}

export default JobCard;
