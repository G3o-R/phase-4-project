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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 0px;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const JobDataContainer = styled.div`
  margin-left: 5rem; /* Add margin to the left */
`;

const ContactInfoContainer = styled.div`
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 10px;
  margin-right: 5rem; /* Add margin to the right */
`;

const JobStatusSelect = styled.select`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  background-color: #e0f0ff;
  padding: 5px 10px;
  border-radius: 5px;
  display: inline;
  width: auto;
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
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

function MyJobCard({ job_application }) {
  const { company, description, email, location, phone_number, position, status } = job_application;
  const [selectedStatus, setSelectedStatus] = useState(status);
  const { user, setUser } = useContext(Context);
  const [showUpdateDrop, setShowUpdateDrop] = useState(false)

  function handleStatusChange(e){
    e.preventDefault()
    setSelectedStatus(e.target.value);

  };

  function handleDeleteApplication(application) {
    const userToUpdate = { ...user };
    const updatedUserJobArray = userToUpdate.job_applications.filter(
      (job_application) => job_application.id !== application
    );
    userToUpdate.job_applications = updatedUserJobArray;
    setUser(userToUpdate);
  }

  function handleDeleteClick() {
    fetch(`/users/${user.id}/job_applications/${job_application.id}`, {
      method: 'DELETE',
    }).then(() => handleDeleteApplication(job_application.id));
  }

  return (
    <JobCardContainer>
      <CloseButton onClick={handleDeleteClick}>X</CloseButton>
      <JobDataContainer>
        {showUpdateDrop ?
        <JobStatusSelect value={selectedStatus} onChange={handleStatusChange}>
          <option value="Applied">Applied</option>
          <option value="No Longer Interested">No Longer Interested</option>
          <option value="Offer Received">Offer Received</option>
          <option value="Not Selected by Employer">Not Selected by Employer</option>
        </JobStatusSelect> : <JobStatus>Status: {status}</JobStatus> }
        <JobDescription>{description}</JobDescription>
        <JobInfo>Position: {position}</JobInfo>
        <JobInfo>Company: {company}</JobInfo>
        <JobInfo>Location: {location}</JobInfo>
      </JobDataContainer>
      <ContactInfoContainer onDoubleClick={()=>console.log(`double clicked ${job_application.id}`)}>
        <p>Email: {email}</p>
        <p>Phone: {phone_number}</p>
      </ContactInfoContainer>
      <UpdateStatusButton onClick={()=>setShowUpdateDrop(!showUpdateDrop)}>Update Status</UpdateStatusButton>
    </JobCardContainer>
  );
}

export default MyJobCard;
