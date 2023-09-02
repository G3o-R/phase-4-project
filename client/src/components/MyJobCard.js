import React from 'react';
import styled from 'styled-components';

const JobCardContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px auto;
  max-width: 60rem; 
  width: 100%; 
  height:180px;
  aspect-ratio: 5/3;
  position: relative;
`;

const JobStatus = styled.p`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  background-color: #e0f0ff;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
`;

const JobDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

const JobInfo = styled.p`
  font-size: 12px;
  color: #888;
  margin-bottom: 10px;
`;

const UpdateStatusButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 14px;
  position: absolute;
  top: 10px; /* Move the button to the top */
  right: 10px; /* Move the button to the right */
  cursor: pointer;
`;

function MyJobCard({ job_application, showIsOn, setShowIsOn }){
  const { company, description, email, location, phone_number, position, status } = job_application;

  return (
    <JobCardContainer>
      <JobStatus>Status: {status}</JobStatus>
      <JobDescription>{description}</JobDescription>
      <JobInfo>Position: {position}</JobInfo>
      <JobInfo>Company: {company}</JobInfo>
      <JobInfo>Location: {location}</JobInfo>
      <UpdateStatusButton onClick={()=>setShowIsOn(!showIsOn)}>Update Status</UpdateStatusButton>
    </JobCardContainer>
  );
};

export default MyJobCard;
