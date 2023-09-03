import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FormContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 30rem;
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  font-size: 16px;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
`;

const LoginLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-size: 16px;
  text-align: center;
  margin-top: 1rem;
`;

const Error = styled.p`
  color: red;
`;

function SignupForm({ setUser }) {
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState([]);
  const { username, password, password_confirmation } = signupData;

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    setSignupData({ ...signupData, [name]: value });
  }

  function handleCreateAccountSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((user) => setUser(user)).then(() => navigate("/"));
        } else {
          res.json().then((err) => setErrors(err.errors));
        }
      });
  }

  return (
    <SignupContainer>
      <FormContainer>
        <Form onSubmit={handleCreateAccountSubmit}>
          <Label>Username</Label>
          <Input
            type="text"
            name="username"
            value={username}
            placeholder="Create username..."
            onChange={handleChange}
          />
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            placeholder="Password..."
            onChange={handleChange}
          />
          <Label>Confirm Password</Label>
          <Input
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            placeholder="Confirm password..."
            onChange={handleChange}
          />
          <SubmitButton type="submit">Create Account</SubmitButton>
        </Form>
        <LoginLink to={"/login"}>Login instead</LoginLink>
        {errors.map((error) => (
          <Error key={error}>{error}</Error>
        ))}
      </FormContainer>
    </SignupContainer>
  );
}

export default SignupForm;
