import { Button } from "@mui/material";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h2>Stay Connected</h2>
      <input
        className="email-field"
        placeholder="your email"
        type="email"
        name=""
        id=""
      />
      <Button variant="contained">Submit</Button>
    </div>
  );
};

export default Footer;
