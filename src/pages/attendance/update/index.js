import Image from 'next/image';
import backgroundImg from '../../../assets/bgimg2.png';
import tickIcon from '../../../assets/tick-circle.jpg';
import './style.css';
// import { Poppins, Poppins } from 'next/font/google';

// const Poppins = Poppins({
//   subset: ['latin'],
//   display: 'swap',
//   variable: '--font-poppins',
//   weight: ['500']
// })

function AttendanceUpdated() {
  return (
    <div className='attUpdate'>
      <div className="head">
      </div>
      <div className="box">
        <div className="box1">
          <Image className='bgimg' src={tickIcon} alt='Tick-icon' />

          <svg width="95" fontFamily='Poppins' height="94" viewBox="0 0 95 94" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle id="Icon Background" cx="47.5" cy="47.131" r="46.631" fill="#36728B" fillOpacity="0.2"/>
          </svg>
          <div className="content">
            <Image src={backgroundImg} alt="Ellipse Image" />
            <h1>Attendance Updated!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceUpdated;
