import { styled } from "styled-components";

const ContactInfoForm = styled.form`
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 10px;
  margin-right: 5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 15rem;

  & > label {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }

  & > input {
    margin-left: 10px;
  }
`;

function EditContactForm({ jobApplicationFormData, setJobApplicationFormData, setShowContactForm, showContactForm, handleContactUpdateSubmit }){
    const {email, phone_number} = jobApplicationFormData
      function handleContactChange(e){
    const name = e.target.name;
    const value = e.target.value;
    setJobApplicationFormData({...jobApplicationFormData,[name]:value})
  }

  return(
        <ContactInfoForm onDoubleClick={()=>setShowContactForm(!showContactForm)}>
        <label>
            Email:
        <input type="text" name="email" value={email} onChange={handleContactChange} />
      </label>
      <label>
        Phone:
        <input type="text" name="phone_number" value={phone_number} onChange={handleContactChange} />
      </label>
      <button onClick={handleContactUpdateSubmit}>Edit Contact Information</button>
    </ContactInfoForm>
    )
}

export default EditContactForm