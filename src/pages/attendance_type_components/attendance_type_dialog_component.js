import React from 'react';


const SelectAttendanceTypeDialog = ({ onOptionSelect }) => {

  const handleOptionClick = (value) => {
    onOptionSelect(value);
  };

  return (

    <div style={{ position: 'absolute', marginTop: '10px' }}>

      <div className="rounded-2xl shadow-sm ring-1 ring-inset ring-black" style={{ width: '145px', padding: '5px', background: '#D0D5D8' }}>
        <div style={{ background: '#D0D5D8' }}>
          <div className="flex flex-col text-gray-600">
            <div className="m-1" onClick={() => handleOptionClick('Full-Day')}>
              Full-Day
            </div>
            <div className="m-1" onClick={() => handleOptionClick('Half-Day')}>
              Half-Day
            </div>
            <div className="m-1" onClick={() => handleOptionClick('Work From Home')}>
              Work From Home
            </div>
            <div className="m-1" onClick={() => handleOptionClick('On Leave')}>
              On Leave
            </div>
            <div className="m-1" onClick={() => handleOptionClick('Absent')}>
              Absent
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SelectAttendanceTypeDialog;
