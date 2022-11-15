import React from 'react'
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import "../Styles/Calender.css"

// const isWeekend = (date) => {
//     const day = date.day();
  
//     return day === 0 || day === 6;
//   };

export default function Calender() {

    const [date, setDate] = React.useState(dayjs());  //dayjs('2019-01-25').toDate()
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <StaticDatePicker
      orientation='portrait'
      onChange={(newValue) => setDate(newValue)}
      value={date}
      renderInput={(params) => <TextField {...params} />}
    />
  </LocalizationProvider>
 );
}
