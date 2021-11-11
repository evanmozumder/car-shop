import {
  Alert,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Header from "../../Shared/Header/Header";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();

  // collecting data
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  // processing login data
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    // alert("login form submitted");
    e.preventDefault();
  };

  // processing google signin
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <div>
      <Header></Header>
      <Typography variant="body1" gutterBottom>
        Login
      </Typography>
      <form
        style={{ width: "30%", margin: "0 auto" }}
        onSubmit={handleLoginSubmit}
      >
        <TextField
          sx={{ width: "75%", m: 1 }}
          id="standard-basic"
          name="email"
          type="email"
          onChange={handleOnChange}
          label="your email"
          variant="standard"
        />
        <TextField
          sx={{ width: "75%", m: 1 }}
          id="standard-basic"
          label="password"
          name="password"
          onChange={handleOnChange}
          type="password"
          variant="standard"
        />

        <Button type="submit" sx={{ width: "75%", m: 1 }} variant="contained">
          Login
        </Button>
        <br />
        <br />
        <NavLink style={{ textDecoration: "none" }} to="/register">
          <Button variant="text">New User? Please Register</Button>
        </NavLink>
        {isLoading && <CircularProgress />}
        {user?.email && (
          <Alert severity="success">Logged in successfully</Alert>
        )}
        {authError && <Alert severity="error">{authError}</Alert>}
      </form>
      <br />
      <br />
      <Button onClick={handleGoogleSignIn} variant="contained">
        Google Sign In
      </Button>
    </div>
  );
};

export default Login;
