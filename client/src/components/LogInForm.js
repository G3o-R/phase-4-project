import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f0f0f0; /* Set the background color to match JobCards */
  min-height: 100vh; /* Ensure the login form takes up the full viewport height */
`;

const FormContainer = styled.div`
  background-color: #ffffff; /* Background color for the login form */
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

const SignupLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-size: 16px;
  text-align: center;
  margin-top: 1rem;
`;

const Error = styled.h1`
  color: red;
`;

function LoginForm({ setUser }) {
  const navigate = useNavigate();

  const [loginFormData, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState([]);

  const { password, username } = loginFormData;

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    setLoginForm({ ...loginFormData, [name]: value });
    console.log(loginFormData);
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginFormData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user)).then(() => navigate("/"));
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <LoginContainer>
      <FormContainer>
        <Form onSubmit={handleLoginSubmit}>
          <Label>Username</Label>
          <Input
            type="text"
            name="username"
            value={username}
            placeholder="Username..."
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
          <SubmitButton type="submit">Login</SubmitButton>
        </Form>
        <SignupLink to="/signup">Signup instead</SignupLink>
        {errors.map((error) => (
          <Error key={error}>{error}</Error>
        ))}
      </FormContainer>
    </LoginContainer>
  );
}

export default LoginForm;
