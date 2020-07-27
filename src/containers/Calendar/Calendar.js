import React from "react";

import TUICalendar from "@toast-ui/react-calendar";

import classes from "./Calendar.module.css";
import "tui-calendar/dist/tui-calendar.css";

export default function Calendar() {
  return (
    <div className={classes.Calendar}>
      <h1>Welcome to R2Dispatch</h1>

      <TUICalendar />
    </div>
  );
}
