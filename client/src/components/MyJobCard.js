import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Context } from './Context/Context';
import EditContactForm from './EditContactForm';

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
  margin-left: 5rem;
  `;

const ContactInfoContainer = styled.div`
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 10px;
  margin-right: 5rem;
  cursor: pointer;
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


function MyJobCard({ job_application, setErrors }) {
  const { company, description, location, position, id } = job_application;
  const { user, setUser } = useContext(Context);
  const [showUpdateDrop, setShowUpdateDrop] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false)
  const [jobData, setJobData] = useState({
    email: "",
    phone_number: "",
    status: "",
    id  
  });

  const { email, phone_number, status } = jobData;

  useEffect(() => {
    if (job_application) {
      setJobData({
        email: job_application.email,
        phone_number: job_application.phone_number,
        status: job_application.status
      });
    }
  }, [job_application]);

  function handleJobStatusChange(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    fetch(`/job_applications/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ [name]: value }),
    })
      .then((r) => {
        if (r.ok) {
          setJobData({ ...jobData, [name]: value });
        } else {
          alert("wasn't able to update job status")
        }
      })
    setShowUpdateDrop(false);
  }

  function handleContactEditSubmit(e){
    e.preventDefault()
    
    fetch(`/job_applications/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jobData),
    }).then((r) => {
        if (r.ok) {
          r.json().then((editedJob)=>{
            setJobData(editedJob) 
            setShowContactForm(false)})
            setErrors([])
        } else {
          r.json().then((err)=>setErrors(err.errors))
        }
      })

  }

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
        {showUpdateDrop ? (
          <JobStatusSelect value={status} name="status" onChange={handleJobStatusChange}>
            <option value="Applied">Applied</option>
            <option value="No Longer Interested">No Longer Interested</option>
            <option value="Offer Received">Offer Received</option>
            <option value="Not Selected by Employer">Not Selected by Employer</option>
          </JobStatusSelect>
        ) : (
          <JobStatus>Status: {status}</JobStatus>
        )}
        <JobDescription>{description}</JobDescription>
        <JobInfo>Position: {position}</JobInfo>
        <JobInfo>Company: {company}</JobInfo>
        <JobInfo>Location: {location}</JobInfo>
      </JobDataContainer>
      {showContactForm ? (
        <EditContactForm
          jobData={jobData}
          setJobData={setJobData}
          setShowContactForm={setShowContactForm}
          showContactForm={showContactForm}
          handleContactEditSubmit={handleContactEditSubmit}
        />
      ) : (
        <ContactInfoContainer onDoubleClick={() => setShowContactForm(!showContactForm)}>
          <p>Email: {email}</p>
          <p>Phone: {phone_number}</p>
        </ContactInfoContainer>
      )}
      <UpdateStatusButton onClick={() => setShowUpdateDrop(!showUpdateDrop)}>Update Status</UpdateStatusButton>
    </JobCardContainer>
  );
}

export default MyJobCard;
