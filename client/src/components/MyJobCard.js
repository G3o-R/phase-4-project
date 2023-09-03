import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Context } from './Context/Context';

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

const CloseButton = styled.button`
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 0px; /* Optional: Add rounded corners for a squared button */
  width: 1.5rem; /* Fixed width */
  height: 1.5rem; /* Fixed height */
  font-size: 16px;
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
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
  const { user, setUser } = useContext(Context);

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };
  function handleDeleteApplication(application){
    const userToUpdate = {...user}
    const updatedUserJobArray = userToUpdate.job_applications.filter((job_application)=> job_application.id !== application)
    userToUpdate.job_applications = updatedUserJobArray
    setUser(userToUpdate)
  }

  function handleDeleteClick(){
    fetch(`/users/${user.id}/job_applications/${job_application.id}`,{
        method: "DELETE"
    })
    .then(()=>handleDeleteApplication(job_application.id))
}

  return (
    <JobCardContainer>
      <CloseButton onClick={handleDeleteClick}>X</CloseButton>
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
      <UpdateStatusButton onClick={() => console.log("Update clicked")}>Update Status</UpdateStatusButton>
    </JobCardContainer>
  );
}

export default MyJobCard;
