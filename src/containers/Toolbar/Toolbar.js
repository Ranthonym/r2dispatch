import React from "react";

import Calendar from "../Calendar/Calendar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import classes from "./Toolbar.module.css";

export default function Toolbar() {
  return (
    <div className={classes.Toolbar}>
      <h1>Welcome to R2Dispatch</h1>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
      <Calendar />
    </div>
  );
}
