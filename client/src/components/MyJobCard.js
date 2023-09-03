import React, { useState } from 'react';
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
  height: 180px;
  aspect-ratio: 5/3;
  position: relative;
`;

const JobStatus = styled.select`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  background-color: #e0f0ff;
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
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

function MyJobCard({ job_application }) {
  const { company, description, email, location, phone_number, position, status } = job_application;
  const [selectedStatus, setSelectedStatus] = useState(status);

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  return (
    <JobCardContainer>
      <JobStatus value={selectedStatus} onChange={handleStatusChange}>
        <option value="Applied">Applied</option>
        <option value="No Longer Interested">No Longer Interested</option>
        <option value="Offer Received">Offer Received</option>
        <option value="Not Selected by Employer">Not Selected by Employer</option>
      </JobStatus>
      <JobDescription>{description}</JobDescription>
      <JobInfo>Position: {position}</JobInfo>
      <JobInfo>Company: {company}</JobInfo>
      <JobInfo>Location: {location}</JobInfo>
      <UpdateStatusButton onClick={() => console.log("clicked")}>Update Status</UpdateStatusButton>
    </JobCardContainer>
  );
}

export default MyJobCard;