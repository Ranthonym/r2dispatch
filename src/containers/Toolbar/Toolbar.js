import React, { useState } from "react";

import Calendar from "../Calendar/Calendar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import classes from "./Toolbar.module.css";

export default function Toolbar() {
  const [driver, setDriver] = useState(null);
  return (
    <div className={classes.Toolbar}>
      <h1 style={{ textAlign: "center", fontWeight: "bold", color: "#ff72ff" }}>
        R2Dispatch
      </h1>
      <DropdownButton
        id="dropdown-variants-Info"
        variant="info"
        title="Dropdown button"
      >
        <Dropdown.Item onClick={() => setDriver("abe")}>Abe</Dropdown.Item>
        <Dropdown.Item onClick={() => setDriver("maggie")}>
          Maggie
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setDriver("hunter")}>
          Hunter
        </Dropdown.Item>
      </DropdownButton>
      <Calendar />
    </div>
  );
}
