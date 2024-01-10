import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarDialog({ onChange, value }) {
  const today = new Date();
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        minDate={today}
      />
    </div>
  );
}
