import React, { useState } from 'react';

import './date-checker.css';

const DateChecker = () => {
  const [dateInput, setDateInput] = useState('')
  const [validity, setValidity] = useState(false)

  const regex = new RegExp(/^(?<fullyear>\d{4})-(?<month>0[1-9]|1[0-2])-(?<mday>0[1-9]|[12][0-9]|3[01])(?<tstamp>T| )(?<hour>[01][0-9]|2[0-3]):(?<minute>[0-5][0-9]):(?<second>[0-5][0-9]|60)(?<secfrac>\.[0-9]+)?(Z|(\+|-)(?<offset_hour>[01][0-9]|2[0-3]):(?<offset_minute>[0-5][0-9]))$/i)
   
  const dateToCheck = dateInput.trim()

  const handleDateInput = (e) => {
    regex.test(e) ? setValidity(true) : setValidity(false)
  }

  return (
    <div className='date-checker'>
      <p className='section-header'>Validate RFC 3339</p>
      <input type="text" name="name"
        onChange={(e) => {
          setDateInput(e.target.value)
          handleDateInput(e.target.value)
          console.log('test', regex.test(e.target.value))
        }}
      />
      {dateInput && dateInput.length > 15 && 
        <p>{validity.toString()}</p>
      }
    </div>
  )
}

export default DateChecker;