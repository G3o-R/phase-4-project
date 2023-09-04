import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "./Context/Context";
import styled from "styled-components";

const JobContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 25rem;
  height: 60rem;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const JobCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const JobTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const JobInfo = styled.p`
  font-size: 16px;
  color: #666;
  margin: 4px 0;
`;

const ApplyButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ApplyForm = styled.div`
  margin-top: 10px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;

  p {
    font-size: 16px;
    margin-bottom: 8px;
  }

  input {
    font-size: 16px;
    padding: 8px;
    margin-bottom: 8px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
`;

const ErrorText = styled.p`
  color: #ff0000;
  font-weight: bold;
`;

function JobDisplay({ job }) {
  const { description, pay, location, position, company, about_the_job, id } = job;
  const [showIsOn, setShowIsOn] = useState(false);
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(Context);
  const [errors, setErrors] = useState([]);

  function handleNewApplication(newApplication) {
    const userToUpdate = { ...user };
    const updatedUserJobArray = [...userToUpdate.job_applications, newApplication];
    userToUpdate.job_applications = updatedUserJobArray;
    setUser(userToUpdate);
  }

  function showContactForm() {
    if (user) {
      setShowIsOn(!showIsOn);
    } else {
      alert("You have to login");
      navigate("/login");
    }
  }

  function handleApplySubmit(e) {
    e.preventDefault();
    const contactData = {
      email: email,
      phone_number: phone_number,
      job_id: id
    };
    fetch("/job_applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactData),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((application) => {
            setErrors([])
            handleNewApplication(application)});
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
  }

  return (
    <JobContainer>
      <JobCard>
        <JobTitle>{position}</JobTitle>
        <JobInfo>{description}</JobInfo>
        <JobInfo>{company}</JobInfo>
        <JobInfo>{location}</JobInfo>
        <JobInfo>{pay}</JobInfo>
        <ApplyButton onClick={showContactForm}>Interested?</ApplyButton>
      </JobCard>
      <p>{about_the_job}</p>
      {showIsOn ? <ApplyForm>
        <p>Please enter your contact information</p>
        <ContactForm onSubmit={handleApplySubmit}>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="phone_number"
            value={phone_number}
            placeholder="Phone number..."
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button type="submit">Complete Application</button>
        </ContactForm>
      </ApplyForm>: null}
      {errors.map((error, index) => (
        <ErrorText key={error}>* {error}</ErrorText>
      ))}
    </JobContainer>
  );
}

export default JobDisplay;
