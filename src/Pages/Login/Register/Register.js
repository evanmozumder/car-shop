import {
  Alert,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
// import CircularProgress from "@mui/material/CircularProgress";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { registerUser, isLoading, user, authError } = useAuth();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    // console.log(newLoginData);
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginData.password !== loginData.confirmPassword) {
      alert("your password did not match");
      return;
    }
    registerUser(loginData.name, loginData.email, loginData.password, history);
    // alert("login form submitted");
  };
  return (
    <Container>
      <Typography variant="body1" gutterBottom>
        Register
      </Typography>
      {!isLoading && (
        <form
          style={{ width: "75%", margin: "0 auto" }}
          onSubmit={handleLoginSubmit}
        >
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            name="name"
            type="text"
            onBlur={handleOnBlur}
            label="Your Name"
            variant="standard"
          />
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            name="email"
            type="email"
            onBlur={handleOnBlur}
            label="Your Email"
            variant="standard"
          />
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Password"
            name="password"
            onBlur={handleOnBlur}
            type="password"
            variant="standard"
          />
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Confirm Password"
            name="confirmPassword"
            onBlur={handleOnBlur}
            type="password"
            variant="standard"
          />

          <Button type="submit" sx={{ width: "75%", m: 1 }} variant="contained">
            Register
          </Button>
          <NavLink style={{ textDecoration: "none" }} to="/login">
            <Button variant="text">Already Registered? Please Login</Button>
          </NavLink>
        </form>
      )}
      {isLoading && <CircularProgress />}
      {user?.email && (
        <Alert severity="success">user created successfully</Alert>
      )}
      {authError && <Alert severity="error">{authError}</Alert>}
    </Container>
  );
};

export default Register;
