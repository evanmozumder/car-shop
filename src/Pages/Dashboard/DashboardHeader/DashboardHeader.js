import MenuIcon from "@mui/icons-material/Menu";
import { CircularProgress } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const DashboardHeader = () => {
  const { path, url } = useRouteMatch();
  const { user, logout, isLoading, admin } = useAuth();

  //   console.log("usr", user.roll);

  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {admin ? (
            <>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/"
              >
                <Button color="inherit">Home</Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to={`${url}/manageOrders`}
              >
                <Button color="inherit">Manage All Orders</Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to={`${url}/addProduct`}
              >
                <Button color="inherit">Add A Product</Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to={`${url}/makeAdmin`}
              >
                <Button color="inherit">Make Admin</Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to={`${url}/manageProducts`}
              >
                <Button color="inherit">Manage Products</Button>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/"
              >
                <Button color="inherit">Home</Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to={`${url}/pay`}
              >
                <Button color="inherit">Pay</Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to={`${url}/myOrders`}
              >
                <Button color="inherit">My Orders</Button>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to={`${url}/review`}
              >
                <Button color="inherit">Review</Button>
              </NavLink>
            </>
          )}
          <Button onClick={logout} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default DashboardHeader;
