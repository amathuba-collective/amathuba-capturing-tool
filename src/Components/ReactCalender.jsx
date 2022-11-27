import React, { useState } from "react";
import Calendar from "react-calendar";
import "../Styles/ReactCalender.css";
import "react-calendar/dist/Calendar.css";

function ReactCalendar() {
  const [value, OnValueChange] = useState(new Date());


  // const SplitDate = (defaultValue) => {
  //   const arrayDate = defaultValue.toLocaleDateString().split("/");
  //   document.writeln(
  //     "\n Day : " +
  //       arrayDate[0] +
  //       "\n Month : " +
  //       arrayDate[1] +
  //       "\n Year : " +
  //       arrayDate[2]
  //   );
  // };
  return (
    <>
      <Calendar
      className="react-calendar"
        minDetail="year"
        // maxDate={new Date(2022, 10, 28)}
        value={value}
        onChange={OnValueChange}
      />
      <div className="d-grid mt-1">
      <button className="calendar_button" >
        Save Date
      </button>
      </div>

      {/* {value && <h3> {value.toLocaleDateString()} </h3>}
      {value && <h3> {String(value)} </h3>} */}
      </>
  );
}
export default ReactCalendar;
