import React from "react";
import { Link } from "react-router-dom";
import logo from "../job-search-svgrepo-com.svg";
import styled from "styled-components";


const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  width: 100%;
  background-color: #f1f1f14d;
  border-bottom: 1px solid lightgrey;
`;

const NavbarLeft = styled.div`
  padding-left: 1rem;
  display: flex;
  justify-content: center;

  .jobs-svg {
    width: 40px;
    padding-right: 5px;
    padding-bottom: 15px;
  }
`;

const NavbarRight = styled.div`
  padding-right: 3rem;
`;

const NavLinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
  padding-right: 1rem;
  margin-top: 5px;
  line-height: normal;
  &:hover {
    font-weight: bold;
  }
`;

const NavLinkBig = styled(NavLinkStyled)`
  font-size: 18px;
  font-weight: bold;
  height: 100%;
  transition: background-color 0.3s ease-in-out;
  display: inline-block;
  padding: 10px 20px;
  border-radius: 50%;
  background-color: rgba(173, 216, 230, 0);

  position: relative;
  text-decoration: none;

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: blue;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.2s ease-in-out;
  }

  &:focus::after {
    transform: scaleX(1);
  }
`;

function NavBar({ user, setUser }) {
  const isLoggedIn = user === null ? false : true;

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setUser(null);
      }
    });
  }

  return (
    <NavbarContainer>
      <NavbarLeft>
        <NavLinkStyled to="/">
          <img src={logo} alt="job png" className="jobs-svg" />
        </NavLinkStyled>
      </NavbarLeft>
      <NavbarRight>
        <NavLinkBig to="/my-job-applications">My Job Applications</NavLinkBig>
        <NavLinkBig to="/my-jobs">MyJobs</NavLinkBig>
        <NavLinkBig to="/create-job">Create a Job</NavLinkBig>
        {isLoggedIn ? (
          <NavLinkBig onClick={handleLogout}>Log Out</NavLinkBig>
        ) : (
          <NavLinkBig to="/login">Login</NavLinkBig>
        )}
      </NavbarRight>
    </NavbarContainer>
  );
}

export default NavBar;
