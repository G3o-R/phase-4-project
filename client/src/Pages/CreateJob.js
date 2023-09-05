import { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../components/Context/Context";

const CreateJobContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 24rem;
  margin: 20px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 60rem;
`;

const FormTitle = styled.h2`
  font-size: 20px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  font-size: 16px;
  color: #333;
  text-decoration: underline;
  display: block;
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  font-size: 16px;
  padding: 8px;
  margin: 0.5rem 0;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  width: 95%;
`;

const FormTextarea = styled.textarea`
  font-size: 16px;
  padding: 8px;
  margin: 0.5rem 0;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  width: 95%;
  min-height: 30rem;
  resize: none;
`;

const FormButton = styled.button`
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

const ErrorText = styled.p`
  color: #ff0000;
  font-weight: bold;
  margin-right: 10rem;
`;

const FormAndErrorsContainer = styled.div`
  width: 70rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
`;

function CreateJob() {
  const { jobsData, setJobs } = useContext(Context);
  const [jobFormData, setJobFormData] = useState({
    description: "",
    pay: "",
    location: "",
    position: "",
    company: "",
    about_the_job: "",
  });
  const [errors, setErrors] = useState([]);

  const {
    description,
    pay,
    location,
    position,
    company,
    about_the_job,
  } = jobFormData;

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    setJobFormData({ ...jobFormData, [name]: value });
  }

  function handleCreateJobSubmit(e) {
    e.preventDefault();
    console.log(jobFormData);
    fetch("/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobFormData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((newJob) => setJobs([...jobsData, newJob]));
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="add-job">
      <FormAndErrorsContainer>
        <CreateJobContainer>
          <FormTitle>Add Jobs Here</FormTitle>
          <form onSubmit={handleCreateJobSubmit}>
            <FormLabel>
              Position:
              <FormInput
                type="text"
                name="position"
                value={position}
                onChange={handleChange}
              />
            </FormLabel>
            <FormLabel>
              Description:
              <FormInput
                type="text"
                name="description"
                value={description}
                onChange={handleChange}
              />
            </FormLabel>
            <FormLabel>
              Company:
              <FormInput
                type="text"
                name="company"
                value={company}
                onChange={handleChange}
              />
            </FormLabel>
            <FormLabel>
              Location:
              <FormInput
                type="text"
                name="location"
                value={location}
                onChange={handleChange}
              />
            </FormLabel>
            <FormLabel>
              Pay:
              <FormInput
                type="text"
                name="pay"
                value={pay}
                onChange={handleChange}
              />
            </FormLabel>
            <FormLabel>
              About the Job:
              <FormTextarea
                name="about_the_job"
                value={about_the_job}
                onChange={handleChange}
              ></FormTextarea>
            </FormLabel>
            <FormButton type="submit">Create Job!</FormButton>
          </form>
        </CreateJobContainer>
        <div>
          {errors.map((error, index) => (
            <ErrorText key={index}>* {error}</ErrorText>
          ))}
        </div>
      </FormAndErrorsContainer>
    </div>
  );
}

export default CreateJob;
