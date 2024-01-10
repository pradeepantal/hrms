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
  const [isAttendanceTypeDialogVisible, setAttendanceTypeDialogVisible] = useState(false);


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
    const userData = getLoginSession();

    if (!userData?.isLoggedIn) {
      router.push('/login');
    }
  }, []);

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>

      <div id='toolbar'>
        <ToolbarComponents showBackArrow={true} title="ADD ATTENDANCE" />
      </div>

      <div id='candidateImage' style={{ marginTop: "30px" }}>
        <RoundedImageComponents />

        <div className="m-5">
          <div style={{
            marginTop: '68px',
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between', color: '#363636',
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            fontWeight: '400'

          }}>
            <div>Attendance Date:</div>
            <div><SelectDateComponents onClick={handleClickCalenderButton} selectedDate={selectedDate} /></div>

          </div>

          <div className="border-b border-gray-300 my-3 mx-auto"></div>

          <div style={{
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between', color: '#363636',
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            fontWeight: '400'
          }}>
            <div>Attendance Type:</div>
            <div><SelectAttendanceTypeComponents /></div>

          </div>

          <div className="border-b border-gray-300 my-3 mx-auto"></div>

        </div>

      </div>


      <div id='emptySpace' style={{ display: 'flex', justifyContent: 'center', position: 'relative' }} >

        <main style={{ ...ribeye.style }}>
          <div style={{
            paddingTop: '60px',
            paddingBottom: '60px',
            width: '196px',
            color: 'rgba(54, 114, 139, 0.50)',
            textAlign: 'center',
            fontSize: '36px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
            letterSpacing: '1.44px',
            textTransform: 'capitalize',
          }}>
            Have a great day!
          </div>
        </main>


        <div id='calendarView' style={{ position: 'absolute', display: 'flex', justifyContent: 'center' }}>
          {isCalendarVisible && (
            <CalendarDialog onChange={handleDateChange} value={selectedDate} />
          )}

        </div>
      </div>
      <div id='submitButton' className="m-5">
        <button className="h-10 w-full flex-shrink-0 bg-[#36728B80] text-black" style={{ border: '2px solid #00000080', borderRadius: '6px' }}>
          <div style={{ color: 'rgba(0, 0, 0, 0.50)', fontSize: '13px' }}>
            Submit
          </div>
        </button>

      </div>

    </div>
  );
}
