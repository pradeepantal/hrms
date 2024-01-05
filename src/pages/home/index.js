import Image from 'next/image';
import React, { useState } from 'react';
import '../home/index.css';  

export default function HomePage() {
  const username = "Paras Verma";
  const profile = "SOFTWARE ENGINEER";

  const [isChecked, setChecked] = useState(false);
  const attendence = () => {

  }
  const leave = () => {

  }
  const holiday = () => {

  }

  const handleToggle = () => {
    setChecked(!isChecked);
  };

  return (
    <div className='homepg'>
      <div className='head'>
        <h1>HOME</h1>
      </div>
      <div className='avatar'>
        <img
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1704360320~exp=1704360920~hmac=fb562667f5cd7a959608bbb4aaa8a347169b505a0065fd276251e7e173e44b05"
          alt="user profile"
        />
      </div>
      <div className="username">
        <p>{username}</p>
      </div>
      <div className="prof">
        <p>{profile}</p>
      </div>
      <div className="toggle-container">
        <input type="checkbox" id="toggle" className='toggle' checked={isChecked} onChange={handleToggle}/>
        <label htmlFor="toggle" className={`switch ${isChecked ? 'checked' : ''}`}></label>
      </div>

    <div className="buttons">
      <input type="button" className='attBtn' onClick={attendence} value="ATTENDENCE" />
    
      <input type="button" className='leaveBtn' onClick={leave} value="LEAVE" />
    
      <input type="button" className='holidayBtn' onClick={holiday} value="HOLIDAYS" />
    </div>
    
    </div>
  );
}
