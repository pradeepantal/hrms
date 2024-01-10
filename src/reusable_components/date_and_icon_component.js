import React, { useState, useEffect } from 'react';

export default function SelectDateComponents({ onClick, selectedDate }) {
  const [localSelectedDate, setLocalSelectedDate] = useState(selectedDate);
  useEffect(() => {
    setLocalSelectedDate(selectedDate);
  }, [selectedDate]);


  const handleDateClick = () => {
    if (onClick) {
      onClick(localSelectedDate);
    }
  };



  return (
    <button
      type="button"
      className="inline-flex date-time-rounded justify-center items-center gap-x-1.5 rounded-md  text-white text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      id="menu-button"
      aria-expanded="true"
      aria-haspopup="true"
      style={{ border: '1px solid black' }}
      onClick={handleDateClick}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          color: '#363636',
          fontFamily: "'Inter', sans-serif",
          fontSize: '16px',
          fontWeight: '400',
          justifyContent: 'space-between',
        }}
      >
        <div
          className="text-gray-800"
          style={{
            color: 'rgba(0, 0, 0, 0.50)',
            fontFamily: "'Roboto', sans-serif",
            fontSize: '13px',
            fontWeight: '500',
            letterSpacing: '0.52px',
            paddingTop: '2px',
            paddingBottom: '1px',
            width: '-webkit-fill-available',
          }}
        >
          {localSelectedDate
            ? localSelectedDate.toLocaleDateString('en-GB')
            : 'DD-MM-YY'}
        </div>
        <div>
          <div className="flex flex-row">
            <div
              style={{
                width: '1px',
                height: '23px',
                background: 'gray',
              }}
            ></div>
            <div></div>
            <div className="date-time-icon-margin">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
                <path d="M16.625 3.16666H4.375C3.4085 3.16666 2.625 3.87555 2.625 4.75V15.8333C2.625 16.7078 3.4085 17.4167 4.375 17.4167H16.625C17.5915 17.4167 18.375 16.7078 18.375 15.8333V4.75C18.375 3.87555 17.5915 3.16666 16.625 3.16666Z" stroke="#363636" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14 1.58334V4.75" stroke="#363636" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7 1.58334V4.75" stroke="#363636" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.625 7.91666H18.375" stroke="#363636" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />


              </svg>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
