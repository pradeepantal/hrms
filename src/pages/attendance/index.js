import React, { useEffect } from "react"
import Image from 'next/image'
import { useRouter } from "next/router"
import calendar from '../../assets/calendar.png'
import picture from '../../assets/picture.png'
import './style.css'

export default function Attendance() {

  useEffect (() => {

  }
  )

    const router = useRouter();
    function addAttendance() {
        router.push("/leave");
    }

    function Arrow() {
        router.push("/home");
    }

    const handleSubmit = () => {
        let uri ="/api/method/frappe.desk.reportview.get"
        const data = {
        };
    
        const headers = {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Accept': 'application/json',
         // 'Cookie': 'full_name=Administrator; sid=e10759f1b56e6cd7d9830d28518a07ce803d5007b385637f82df9ccc; system_user=yes; user_id=Administrator; user_image='
        };
    
      HttpService.post(uri,  data).then((response) =>{
        console.log(response);
        if(response.status==200){
          router.push("/home");
        }
      })
      };

    return (

        <>
            <div className="head">
                <h1>
                    {/* <Image src={arrow}  style={{borderRadius:50, float: "left"}} onClick={Arrow} />   */}
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ float: "left" }} onClick={Arrow} width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12H5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 19L5 12L12 5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <Image src={picture} style={{ borderRadius: 50, float: "right", marginTop: -3 }} /> ATTENDANCE
                </h1>
            </div>
            <form>
                <div className="container" >
                    <div className="month">
                        <select className="date-list" >
                            <option value="Date">Jan </option>
                            <option> Feb </option>
                            <option> Mar</option>
                            <option> Apr</option>
                            <option> May</option>
                            <option> Jun </option>
                            <option> Jul</option>
                            <option> Aug</option>
                            <option> Sep</option>
                            <option> Oct </option>
                            <option> Nov</option>
                            <option> Dec</option>
                        </select>
                    </div>
                    <div className="year">
                        <select className="Year-list" style={{ background: 'rgba(54, 114, 139, 0.10)' }} >
                            <option value="Date">2024 </option>
                            <option >2023 </option>
                            <option >2022 </option>
                            <option >2021 </option>
                        </select>
                    </div>
                </div>
            </form>
            <div className="table-list">
                <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td> <Image src={calendar} style={{ borderRadius: 50 }} /> 4-Jan-2024</td>
                            <td  ><span className="prs"> Present </span></td>
                        </tr>
                        <tr>
                            <td> <Image src={calendar} style={{ borderRadius: 50 }} /> 4-Jan-2024</td>
                            <td> <span className="lev"> On Leave </span></td>
                        </tr>
                        <tr>
                            <td> <Image src={calendar} style={{ borderRadius: 50 }} /> 4-Jan-2024</td>
                            <td> <span className="abs">Absent </span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="btn-atd">
                <button className="btn" type="submit" onClick={addAttendance}> ADD ATTENDANCE </button>
            </div>
        </>
    )
}