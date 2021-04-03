import React, { useState } from 'react';
import DatePicker, { setHours, setMinutes } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './date-picker.css';

const DateSelector = () => {
  const [startDate, setStartDate] = useState(new Date());

  const filterPassedTime = time => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  }

  function ISODateString(d){
    function pad(n){return n<10 ? '0'+n : n}
    return d.getUTCFullYear()+'-'
         + pad(d.getUTCMonth()+1)+'-'
         + pad(d.getUTCDate())+'T'
         + pad(d.getUTCHours())+':'
         + pad(d.getUTCMinutes())+':'
         + pad(d.getUTCSeconds())+'Z'
    }
   
   var d = new Date();

  return (
    <div className='date-picker'>
      <p className='section-header'>Select a date</p>
      <DatePicker
        selected={startDate}
        onChange={date => {
          setStartDate(date)
          console.log(ISODateString(startDate).length)
        }}
        timeInputLabel="Time:"
        dateFormat="MMMM d, yyyy h:mm aa"
        showTimeInput
      />
      <p>{ISODateString(startDate)}</p>
    </div>
  )
}

export default DateSelector;