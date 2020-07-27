import React, { useCallback, useRef } from "react";

import TUICalendar from "@toast-ui/react-calendar";
import { ISchedule } from "tui-calendar";

import classes from "./Calendar.module.css";
import "tui-calendar/dist/tui-calendar.css";

const start = new Date();
const end = new Date(new Date().setMinutes(start.getMinutes() + 30));

const schedules: ISchedule[] = [
  {
    calendarId: "1",
    category: "time",
    isVisible: true,
    title: "Study",
    id: "1",
    body: "Test",
    start,
    end,
  },
];

export default function Calendar() {
  const cal = useRef(null);

  const onBeforeCreateSchedule = useCallback((scheduleData) => {
    console.log(scheduleData);

    const schedule = {
      id: String(Math.random()),
      title: scheduleData.title,
      isAllDay: scheduleData.isAllDay,
      start: scheduleData.start,
      end: scheduleData.end,
      category: scheduleData.isAllDay ? "allday" : "time",
      dueDateClass: "",
      location: scheduleData.location,
      raw: {
        class: scheduleData.raw["class"],
      },
      state: scheduleData.state,
    };

    cal.current.calendarInst.createSchedules([schedule]);
  }, []);

  return (
    <div className={classes.Calendar}>
      <h1>Welcome to R2Dispatch</h1>

      <TUICalendar
        ref={cal}
        height="900px"
        view={"week"}
        schedules={schedules}
        scheduleView={["time"]}
        template={{}}
        taskView={false}
        useDetailPopup
        useCreationPopup
        onBeforeCreateSchedule={onBeforeCreateSchedule}
      />
    </div>
  );
}
