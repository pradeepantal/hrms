import React, { useState, useEffect } from 'react';
import { getLoginSession } from '../../helper/helper';
import { useRouter } from 'next/router';
import '../../app/globals.css';
import ToolbarComponents from '../../reusable_components/toolbar_components'
import RoundedImageComponents from '@/reusable_components/rounded_image_components';
import SelectDateComponents from '@/reusable_components/date_and_icon_component';
import SelectAttendanceTypeComponents from '@/reusable_components/attendance_type_and_icon_component';
import { Ribeye } from 'next/font/google';
import CalendarDialog from '../calendar_components/calendar_dialog_components';

const ribeye = Ribeye({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ribeye',
  weight: ['400'],
});



export default function AddAttendance() {

  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());


  const handleDateChange = (date) => {

    setSelectedDate(date);
    setCalendarVisible(false);

  };


  const handleClickCalenderButton = (date) => {
    setCalendarVisible((prevVisibility) => !prevVisibility);
    if (date) {
      setSelectedDate(date);
    }

  };



  const router = useRouter();

  useEffect(() => {
    setSelectedDate(null);
    //const userData = getLoginSession();

    // if (!userData?.isLoggedIn) {
    //   router.push('/login');
    // }
  }, []);

  return (

    <div className="h-screen flex flex-col justify-between">
      <div id='toolbar'>
        <ToolbarComponents showBackArrow={true} title="ADD ATTENDANCE" />
      </div>

      <div id='candidateImage' className="mt-7">
        <RoundedImageComponents />

        <div className="m-5">
          <div className="mt-20 flex flex-row justify-between text-base font-normal text-gray-600">

            <div>Attendance Date:</div>
            <div><SelectDateComponents onClick={handleClickCalenderButton} selectedDate={selectedDate} /></div>

          </div>

          <div className="border-b border-gray-300 my-3 mx-auto"></div>

          <div className="flex flex-row justify-between text-base font-normal text-gray-600">

            <div>Attendance Type:</div>
            <div><SelectAttendanceTypeComponents /></div>

          </div>

          <div className="border-b border-gray-300 my-3 mx-auto"></div>

        </div>

      </div>


      <div id='emptySpace' className='flex justify-center relative'>

        <main style={{ ...ribeye.style }}>
          <div
            className='flex justify-center leading-normal pt-14 pb-14 w-36 text-center text-4xl not-italic font-normal have_a_nice_day_color'>
            Have A Great Day!
          </div>
        </main>


        <div id='calendarView' style={{ position: 'absolute', display: 'flex', justifyContent: 'center' }}>
          {isCalendarVisible && (
            <CalendarDialog onChange={handleDateChange} value={selectedDate} />
          )}

        </div>
      </div >
      <div id='submitButton' className="m-5">
        <button className="h-10 w-full text-sm flex-shrink-0 bg-[#36728B80] text-black submit_button_color border-black border-2 rounded-md">
          Submit
        </button>

      </div>

    </div >
  );
}
