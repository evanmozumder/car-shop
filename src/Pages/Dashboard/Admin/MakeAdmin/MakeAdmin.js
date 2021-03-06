import { Button, CircularProgress, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../../hooks/useAuth";

const MakeAdmin = () => {
  const { isLoading, setAdmin } = useAuth();
  const [adminEmail, setAdminEmail] = useState("");
  const handleOnBlur = (e) => {
    setAdminEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    const user = { email: adminEmail };
    e.preventDefault();
    fetch("https://gentle-bastion-31769.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setAdmin(true);
          alert("made an admin");
        }
      });
  };
  return (
    <div>
      {isLoading && <CircularProgress />}
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ my: 5 }}
          id="standard-basic"
          label="Email"
          type="email"
          variant="standard"
          name="email"
          onBlur={handleOnBlur}
        />
        <br />
        <Button variant="contained" type="submit">
          Make Admin
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
