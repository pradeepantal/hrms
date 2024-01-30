"use client"

import Image from 'next/image';
import HttpService from '../../utilities/api';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import '../home/index.css';  
import axios from 'axios';
import { useSearchParams } from 'next/navigation';

export default function HomePage() {
  const [avatar, setAvatar] = useState("https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1704360320~exp=1704360920~hmac=fb562667f5cd7a959608bbb4aaa8a347169b505a0065fd276251e7e173e44b05")
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    userImage: '',
  });
  const router = useRouter();
  const searchParams = useSearchParams()

  const userProfileHandler = () => {
    const uri = `/api/resource/${searchParams.get('name')}`;
    const cookies = {
      'sid': 'a0488ee168d988705c0c4d8a3f962a9dce3d10e9c3496f156d3851df'
    };
  
    const headers = {
      'Cookie': Object.keys(cookies).map(key => `${key}=${cookies[key]}`).join('; ')
    };
    HttpService.get(uri, {headers}).then((response) => {
      console.log(response);
      if (response.status === 200) {
        // Assuming response.data contains user information
        setUserInfo(response.data);
      }
    }).catch(e=>
      {
        console.log(e)
      });
  }

  // useEffect(() => {
  //    userProfileHandler();
  // },[]);

  const username = "Paras Verma";
  const profile = "SOFTWARE ENGINEER";

  const [isChecked, setChecked] = useState(false);

  const attendance = () => {
    router.push("/attendance");
  }

  const leave = () => {
    router.push("/leave");
  }

  const holiday = () => {
    // router.push("/holidays");
    router.push("/attendance/update");
  }

  const handleToggle = () => {
    setChecked(!isChecked);
    // setAvatar(userInfo.userImage);
  };

  useEffect(()=>{
    axios.get('http://122.176.50.200:8081/api/resource/Employee/HR-EMP-00002', )
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
  });
  })
  return (
    <div className='homepg'>
      <div className='head'>
        <h1>HOME</h1>
      </div>
      <div className='avatar'>
        <img
          src={userInfo.userImage || avatar} // Use avatar as a fallback if userImage is not available
          alt="user profile"
        />
      </div>
      <div className="username">
        <p>{userInfo.fullName || username}</p>
      </div>
      <div className="prof">
        <p>{profile}</p>
      </div>
      <div className="toggle-container">
        <input type="checkbox" id="toggle" className='toggle' checked={isChecked} onChange={handleToggle}/>
        <label htmlFor="toggle" className={`switch ${isChecked ? 'checked' : ''}`}></label>
      </div>

      <div className="buttons">
        <input type="button" className='attBtn' onClick={attendance} value="ATTENDANCE" />
        <input type="button" className='leaveBtn' onClick={leave} value="LEAVE" />
        <input type="button" className='holidayBtn' onClick={holiday} value="HOLIDAYS" />
      </div>
    </div>
  );
}
