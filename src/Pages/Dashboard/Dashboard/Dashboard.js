import { CircularProgress } from "@mui/material";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import useAuth from "../../../hooks/useAuth";
import AddAProduct from "../Admin/AddAProduct/AddAProduct";
import AdminRoute from "../Admin/AdminRoute/AdminRoute";
import MakeAdmin from "../Admin/MakeAdmin/MakeAdmin";
import ManageAllOrders from "../Admin/ManageAllOrders/ManageAllOrders";
import ManageProducts from "../Admin/ManageProducts/ManageProducts";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import Review from "../Review/Review";

const Dashboard = () => {
  const { path, url } = useRouteMatch();
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <div>
      <DashboardHeader></DashboardHeader>
      <Switch>
        <Route exact path={`${path}/pay`}>
          <Pay></Pay>
        </Route>
        <Route exact path={`${path}/review`}>
          <Review></Review>
        </Route>
        <Route exact path={`${path}/myOrders`}>
          <MyOrders></MyOrders>
        </Route>
        <Route exact path={`${path}`}>
          <MyOrders></MyOrders>
        </Route>
        <AdminRoute path={`${path}/manageOrders`}>
          <ManageAllOrders></ManageAllOrders>
        </AdminRoute>
        <AdminRoute path={`${path}/addProduct`}>
          <AddAProduct></AddAProduct>
        </AdminRoute>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/manageProducts`}>
          <ManageProducts></ManageProducts>
        </AdminRoute>
      </Switch>
    </div>
  );
};

export default Dashboard;
