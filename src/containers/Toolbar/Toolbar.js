import React, { useState } from "react";

import Calendar from "../Calendar/Calendar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import classes from "./Toolbar.module.css";

export default function Toolbar() {
  const [driver, setDriver] = useState(null);

  const switchDriver = (name) => setDriver(name);
  // console.log(driver);

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
        <Dropdown.Item onClick={() => switchDriver("abe")}>Abe</Dropdown.Item>
        <Dropdown.Item onClick={() => switchDriver("maggie")}>
          Maggie
        </Dropdown.Item>
        <Dropdown.Item onClick={() => switchDriver("hunter")}>
          Hunter
        </Dropdown.Item>
      </DropdownButton>
      <Calendar driverName={driver} />
    </div>
  );
}
