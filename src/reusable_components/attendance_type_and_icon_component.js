import React, { useState, useEffect } from 'react';

import '../app/styles/add_attendance.css'
import SelectAttendanceTypeDialog from '@/pages/attendance_type_components/attendance_type_dialog_component';

export default function SelectAttendanceTypeComponents() {
  const [isDialogVisible, setAttendanceTypeDialogVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleClickAttendanceTypeButton = () => {
    setAttendanceTypeDialogVisible((prevVisibility) => !prevVisibility);
  };

  const handleOptionSelect = (value) => {
    setSelectedValue(value);
    setAttendanceTypeDialogVisible(false);
  };


  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <button
        type="button"
        className="inline-flex date-time-rounded justify-center items-center gap-x-1.5 rounded-md  text-white text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        style={{ border: '1px solid black' }}
        onClick={handleClickAttendanceTypeButton}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#363636',
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            fontWeight: '400',
            justifyContent: 'space-between'
          }}
        >
          <div
            className="text-gray-800"
            style={{
              color: 'rgba(0, 0, 0, 0.50)',
              fontFamily: "'Roboto', sans-serif",
              fontSize: '13px',
              fontWeight: '500',
              letterSpacing: '0.52px'
              , paddingTop: '1px', paddingBottom: '1px',
              width: '-webkit-fill-available',
            }}
          >
            {selectedValue !== null ? (
              <div>
                {selectedValue}
              </div>
            ) : (
              <div>
                Select
              </div>
            )}

          </div>
          <div>


            <div className="flex flex-row">
              <div
                style={{
                  width: '1px',
                  height: '23px',
                  background: 'gray',
                  marginRight: '2px'

                }}
              ></div>
              <div></div>
              <div >
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                  <path d="M5.75 9L11.5 15L17.25 9" stroke="#363636" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>

            </div>
          </div>
        </div>
      </button >
      {isDialogVisible && <SelectAttendanceTypeDialog onOptionSelect={handleOptionSelect} />}

    </div>
  );
}
